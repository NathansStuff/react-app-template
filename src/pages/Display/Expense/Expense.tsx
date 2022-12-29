import { DisplayButtons } from '@/components/DisplayButtons';
import { DisplayHeading } from '@/components/DisplayHeading';
import { Header } from '@/components/Header';
import { ProgressBar } from '@/components/ProgressBar';
import { ShareExpenses } from '@/UserInput/ShareExpenses';

function Expense(): JSX.Element {
  // ***** CONSTANTS *****
  const baseId = 'screen-expense';
  return (
    <div
      data-testid='Expense'
      className='flex flex-col justify-between h-screen py-2'
    >
      <div>
        <Header />
        <ProgressBar percent={15} current={1} />
        <DisplayHeading title='Expense' infoText='Basic s' />
        <ShareExpenses showErrors={false} baseId={baseId} />
      </div>
      <div className=''>
        <DisplayButtons />
      </div>
    </div>
  );
}

export { Expense };
