import LegalLayout from '@/shared/components/layout/LegalLayout';
import PostWrapper from '@/shared/components/layout/PostWrapper';
import patchNotesData from './patchNotesData.json';
import { FileDiff } from 'lucide-react';

export interface Release {
  id: number;
  tag_name: string;
  published_at: string;
  body: string;
}

const PatchNotes = async () => {
  let patches: Release[] = [];

  try {
    const response = await fetch(
      'https://api.github.com/repos/lingdojo/kana-dojo/releases?per_page=5',
      { next: { revalidate: 3600 } },
    );
    if (response.ok) {
      patches = await response.json();
    }
  } catch (error) {
    console.error('Failed to fetch releases from GitHub:', error);
  }

  // If no GitHub releases, use local patch notes data
  if (!patches || patches.length === 0) {
    return (
      <LegalLayout icon={<FileDiff className='size-6' />}>
        <div className='space-y-8'>
          {patchNotesData.map((patch, index) => (
            <div key={index}>
              <PostWrapper
                textContent={patch.changes
                  .map(change => `- ${change}`)
                  .join('\n')}
                tag={`v${patch.version}`}
                date={new Date(patch.date).toISOString()}
              />
              {index < patchNotesData.length - 1 && (
                <hr className='mt-8 border-(--border-color) opacity-50' />
              )}
            </div>
          ))}
        </div>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout icon={<FileDiff className='size-6' />}>
      <div className='space-y-8'>
        {patches.map((release, index) => (
          <div key={release.id}>
            <PostWrapper
              textContent={release.body}
              tag={release.tag_name}
              date={release.published_at}
            />
            {index < patches.length - 1 && (
              <hr className='mt-8 border-(--border-color) opacity-50' />
            )}
          </div>
        ))}
      </div>
    </LegalLayout>
  );
};

export default PatchNotes;
