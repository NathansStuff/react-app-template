import { DisplayButtons } from '@/components/DisplayButtons';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { Gender, LivingStatus } from '@/UserInput';
import { HaveKids } from '@/UserInput/HaveKids';
import { ResidencyStatus } from '@/UserInput/ResidencyStatus';

function BasicDetails(): JSX.Element {
  return (
    <div data-testid='basic' className=''>
      <Header />
      <ProgressBar percent={15} current={1} />
      <DisplayHeading title='Basic Details' infoText='Basic s' />
      <Gender showErrors={false} baseId='screen-basic' />
      <LivingStatus showErrors={false} baseId='screen-basic' />
      <ResidencyStatus showErrors={false} baseId='screen-basic' />
      <HaveKids showErrors={false} baseId='screen-basic' />
      <DisplayButtons />
    </div>
  );
}

export { BasicDetails };
