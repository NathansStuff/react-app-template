import { Gender, LivingStatus } from '@/UserInput';
import { ResidencyStatus } from '@/UserInput/ResidencyStatus';

function BasicDetails(): JSX.Element {
  return (
    <div data-testid='basic'>
      <Gender showErrors={false} baseId='screen-basic' />
      <LivingStatus showErrors={false} baseId='screen-basic' />
      <ResidencyStatus showErrors={false} baseId='screen-basic' />
    </div>
  );
}

export { BasicDetails };
