import { connect, ConnectedProps } from 'react-redux';

import { EDisplays } from '@/context/display';
import { RootState } from '@/context/store';

import GetParams from './GetParams';

type Props = ConnectedProps<typeof connector>;

function Vroom({ display }: Props): JSX.Element {
  GetParams();
  switch (display) {
    case EDisplays.BASIC_DETAILS:
      return <div>NASIC</div>;
    case EDisplays.INCOME:
    default:
      return <div>room</div>;
  }
}

const mapDispatchToProps = {};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: RootState) => ({
  display: state.displayReducer.display,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Vroom);
