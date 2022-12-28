import { EDisplays, selectDisplay } from '@/context/display';
import { useAppSelector } from '@/context/storeHooks';
import { GetParams } from '@/utils/GetParams';

import { BasicDetails } from './Display/BasicDetails';
import { Income } from './Display/Income';

function DisplayScreen(display: EDisplays): JSX.Element {
  switch (display) {
    case EDisplays.BASIC:
      return <BasicDetails />;
    case EDisplays.INCOME:
      return <Income />;
    default:
      return <div>Vroom</div>;
  }
}

function Vroom(): JSX.Element {
  // ***** Redux *****
  const screen = useAppSelector(selectDisplay);

  // ***** Helper Functions *****
  GetParams();

  // ***** Render *****
  const displayScreen = DisplayScreen(screen as EDisplays);
  return (
    <div data-testid='' className='w-full px-4 bg-gray-100 min-h-screen h-fit'>
      <div className='mx-auto w-full max-w-md'>{displayScreen}</div>
    </div>
  );
}

export { Vroom };
