import { useAppSelector } from '@/context/storeHooks';
import { selectIsLoggedIn } from '@/context/user';

export function Header(): JSX.Element {
  // *****STATE HOOKS*****
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  // *****RENDER*****
  return (
    <div
      data-testid='header'
      className='flex w-full bg-gray-500 justify-between pb-2'
    >
      <div className='pl-2 h-full flex justify-center items-center pt-1'>
        <img
          height={30}
          width={100}
          src='https://dev2-vroom.driveiq.com.au/assets/logos/Vroom_logo_with_TM.svg'
          alt='logo'
        />
      </div>
      <div className='pt-1'>
        <p className='font-semibold text-xs'>
          Get instant pre-approval <br />
          No impact on credit score
        </p>
      </div>
      <button className='bg-white cursor:pointer rounded-bl-xl w-12 flex items-center justify-center shadow-3xl cursor-pointer  transition duration-500 transform hover:bg-gray-100 focus:bg-gray-300 font-semibold text-sm'>
        <h1 className=''>{isLoggedIn ? 'Log Out' : 'Log In'}</h1>
      </button>
    </div>
  );
}
