import { Button, EButtonType } from '../Button';

function DisplayButtons(): JSX.Element {
  function handleClick(): void {
    console.log('clicked');
  }
  return (
    <div className='w-full px-4 py-2 '>
      <div className='mx-auto w-full max-w-md flex space-x-5'>
        <Button onClick={handleClick} type={EButtonType.SECONDARY_OUTLINE}>
          Back
        </Button>
        <Button onClick={handleClick}>Primary</Button>
      </div>
    </div>
  );
}

export { DisplayButtons };
