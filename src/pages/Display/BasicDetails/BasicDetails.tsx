import { DisplayButtons } from '@/components/DisplayButtons';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { Gender, LivingStatus } from '@/UserInput';
import { NumberOfKids } from '@/UserInput/NumberOfKids';
import { ResidencyStatus } from '@/UserInput/ResidencyStatus';
import { VisaNumber } from '@/UserInput/VisaNumber';

function BasicDetails(): JSX.Element {
  return (
    <div data-testid='basic' className='bg-gray-100 h-screen'>
      <Header />
      <ProgressBar percent={15} current={1} />
      <DisplayHeading title='Basic Details' infoText='Basic s' />
      <Gender showErrors={false} baseId='screen-basic' />
      <LivingStatus showErrors={false} baseId='screen-basic' />
      <ResidencyStatus showErrors={false} baseId='screen-basic' />
      <NumberOfKids showErrors={false} baseId='screen-basic' />
      <DisplayButtons />
      <VisaNumber showErrors={false} baseId='screen-basic' />
    </div>
  );
}

export { BasicDetails };
