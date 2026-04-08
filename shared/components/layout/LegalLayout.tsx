'use client';

import Banner from '../Menu/Banner';
import { X } from 'lucide-react';
import { Link } from '@/core/i18n/routing';
import { useClick } from '@/shared/hooks/generic/useAudio';
import clsx from 'clsx';

interface LegalLayoutProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const LegalLayout = ({ children, icon }: LegalLayoutProps) => {
  const { playClick } = useClick();

  return (
    <div className='min-h-dvh bg-(--background-color)'>
      <div className='mx-auto max-w-[900px] px-8 pt-8 pb-20 md:px-16 lg:px-20'>
        <Banner />
        <Link href='/' className='w-full md:w-1/3 lg:w-1/4'>
          <button
            onClick={() => playClick()}
            className={clsx(
              'inline-flex h-12 w-12 items-center justify-center rounded-2xl',
              'bg-(--secondary-color) text-(--background-color) hover:bg-(--main-color)',
              'border-b-8 border-(--secondary-color-accent) hover:border-(--main-color-accent)',
              'transition-all duration-200',
              'active:mb-[6px] active:translate-y-[6px] active:border-b-0',
              'cursor-pointer',
            )}
          >
            <X />
          </button>
        </Link>
        <article className='mt-8'>
          {icon && (
            <div className='mb-6 flex items-center gap-3'>
              <span className='motion-safe:animate-float inline-flex h-12 w-12 items-center justify-center rounded-2xl border-b-8 border-(--main-color-accent) bg-(--main-color) text-(--background-color) [animation-delay:200ms]'>
                {icon}
              </span>
            </div>
          )}
          {children}
        </article>
      </div>
    </div>
  );
};

export default LegalLayout;
