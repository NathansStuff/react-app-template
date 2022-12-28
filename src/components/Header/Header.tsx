import { useAppSelector } from '@/context/storeHooks';
import { selectIsLoggedIn } from '@/context/user';

export function Header(): JSX.Element {
  // *****STATE HOOKS*****
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  // *****RENDER*****
  return (
    <div
      data-testid='header'
      className='flexjustify-between w-full px-4 py-2'
    >
      <div className='mx-auto w-full max-w-md flex justify-between'>
        <div className='h-full flex justify-center items-center pt-2'>
          <img
            height={90}
            width={120}
            src='https://dev2-vroom.driveiq.com.au/assets/logos/Vroom_logo_with_TM.svg'
            alt='logo'
          />
        </div>
        <div className='pt-1'>
          <p className='font-bold text text-secondary'>
            Get instant pre-approval <br />
            No impact on credit score
          </p>
        </div>
        <button className='bg-white cursor:pointer rounded-bl-xl px-1 w-20 flex items-center justify-center shadow-3xl cursor-pointer  transition duration-500 transform hover:bg-gray-100 focus:bg-gray-300 font-semibold text-sm'>
          <h1 className='font-bold text-lg text-secondary'>
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </h1>
        </button>
      </div>
    </div>
  );
}
