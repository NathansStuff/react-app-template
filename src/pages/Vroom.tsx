import { connect, ConnectedProps } from 'react-redux';

import { EDisplays } from '@/context/display';
import { RootState } from '@/context/store';
import { GetParams } from '@/utils/GetParams';

import { BasicDetails } from './Display/BasicDetails';

function DisplayScreen(display: EDisplays): JSX.Element {
  switch (display) {
    case EDisplays.BASIC:
      return <BasicDetails />;
    case EDisplays.INCOME:
    default:
      return <div>Vroom</div>;
  }
}

type Props = ConnectedProps<typeof connector>;

function Vroom({ display }: Props): JSX.Element {
  GetParams();
  const displayScreen = DisplayScreen(display as EDisplays);
  return (
    <div data-testid='' className='w-full px-4 py-2 bg-gray-100 h-screen'>
      <div className='mx-auto w-full max-w-md'>{displayScreen}</div>
    </div>
  );
}

const mapDispatchToProps = {};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: RootState) => ({
  display: state.displayReducer.display,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Vroom);
