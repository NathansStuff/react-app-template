import React from 'react';

export interface IPage {
  children: React.ReactNode;
}

export function Page({ children }: IPage): JSX.Element {
  return (
    <div data-testid='page' className='w-[300px] h-[600px] bg-purple-900'>
      {children}
    </div>
  );
}
