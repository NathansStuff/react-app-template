import { Button } from '@components/Button';

function App(): JSX.Element {
  return (
    <div data-testid='home' className='bg-red-600'>
      <Button
        onClick={(): void => {
          console.log('s');
        }}
      >
        s
      </Button>
      hello
    </div>
  );
}

export default App;
