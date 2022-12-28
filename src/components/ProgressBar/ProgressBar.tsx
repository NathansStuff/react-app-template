export interface IProgressBar {
  percent: number;
  type?: 'FIRST' | 'SECOND';
  current: number;
}

const First = ['LOAN DETAILS', 'YOUR DETAILS', 'LICENSE', 'SUMMARY'];
const Second = ['LOAN DETAILS', 'YOUR DETAILS', 'DRIVERS LICENSE', 'SUMMARY'];

interface IHeading {
  text: string;
  current: number;
  index: number;
}

function Heading({ text, current, index }: IHeading): JSX.Element {
  return (
    <div key={text} className='w-1/4'>
      <h3
        className={`fieldHeading ${
          index + 1 === current ? 'text-blue-600' : null
        }`}
      >
        {text}
      </h3>
    </div>
  );
}

export function ProgressBar({
  percent,
  type = 'FIRST',
  current,
}: IProgressBar): JSX.Element {
  return (
    <div data-testid='ProgressBar' className='rounded-lg bg-white px-5 py-3 5'>
      {/* Headings */}
      <div className='flex text-xs content-center text-center'>
        {type === 'FIRST' &&
          First.map((item, index) => (
            <Heading key={index} text={item} current={current} index={index} />
          ))}
        {type === 'SECOND' &&
          Second.map((item, index) => (
            <Heading key={index} text={item} current={current} index={index} />
          ))}
      </div>

      {/* Progress Bar */}
      <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
