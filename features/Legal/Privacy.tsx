import PostWrapper from '@/shared/components/layout/PostWrapper';
import privacyPolicy from '@/shared/lib/legal/privacyPolicy';
import LegalLayout from '@/shared/components/layout/LegalLayout';
import { Cookie } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <LegalLayout icon={<Cookie className='size-6' />}>
      <PostWrapper textContent={privacyPolicy} />
    </LegalLayout>
  );
};

export default PrivacyPolicy;
