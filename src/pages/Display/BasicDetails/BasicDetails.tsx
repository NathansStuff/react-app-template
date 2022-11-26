import { Gender, LivingStatus } from '@/UserInput';
import { NumberOfKids } from '@/UserInput/NumberOfKids';
import { ResidencyStatus } from '@/UserInput/ResidencyStatus';

function BasicDetails(): JSX.Element {
  return (
    <div data-testid='basic'>
      <Gender showErrors={false} baseId='screen-basic' />
      <LivingStatus showErrors={false} baseId='screen-basic' />
      <ResidencyStatus showErrors={false} baseId='screen-basic' />
      <NumberOfKids showErrors={false} baseId='screen-basic' />
    </div>
  );
}

export { BasicDetails };
