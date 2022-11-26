import { Gender } from '@/UserInput/Gender';

function BasicDetails(): JSX.Element {
  return (
    <div data-testid='basic'>
      <Gender showErrors={false} baseId='screen-basic' />
    </div>
  );
}

export { BasicDetails };
