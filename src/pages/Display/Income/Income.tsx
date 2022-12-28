import { DisplayButtons } from '@/components/DisplayButtons';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { AmountPaid } from '@/UserInput/AmountPaid';
import { EmploymentStatus } from '@/UserInput/EmploymentStatus';
import { OtherIncome } from '@/UserInput/OtherIncome';
import { PaidFrequency } from '@/UserInput/PaidFrequency';

function Income(): JSX.Element {
  return (
    <div data-testid='Income' className='flex flex-col justify-between h-screen py-2'>
      <div>
        <Header />
        <ProgressBar percent={15} current={1} />
        <DisplayHeading title='Income' infoText='Basic s' />
        <EmploymentStatus showErrors={false} baseId='screen-income' />
        <PaidFrequency showErrors={false} baseId='screen-income' />
        <AmountPaid showErrors={false} baseId='screen-income' />
        <OtherIncome showErrors={false} baseId='screen-income' />
      </div>
      <div className=''>
        <DisplayButtons />
      </div>
    </div>
  );
}

export { Income };

