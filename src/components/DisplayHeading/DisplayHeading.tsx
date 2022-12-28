import { useState } from 'react';

import { InformationCircleIcon } from '@heroicons/react/24/solid';

interface IDisplayHeading {
  title: string;
  infoText: string;
}

function DisplayHeading({ title, infoText }: IDisplayHeading): JSX.Element {
  const [showInfo, setShowInfo] = useState(false);

  function handleMouseLeave(): void {
    setShowInfo(false);
  }

  function handleMouseEnter(): void {
    setShowInfo(true);
  }
  return (
    <div className='px-4 py-2 max-w-md flex items-center justify-between relative'>
      <div />
      <h3 className='text-xl font-bold uppercase'>{title}</h3>
      <InformationCircleIcon
        height={20}
        width={20}
        fill='#447CF9'
        className='relative'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`${
          showInfo ? 'absolute' : 'hidden'
        } bg-secondary rounded-lg px-4 py-2 right-7 -top-0`}
      >
        <div className='absolute  border-solid border-l-secondary border-l-8 border-y-transparent border-y-8 border-r-0 -right-2'></div>
        <p className='text-white'>{infoText}</p>
      </div>
    </div>
  );
}

export { DisplayHeading };
