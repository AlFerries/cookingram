import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form className='mx-auto py-30 flex flex-col gap-8 max-w-120'>
      <label className='flex items-center justify-between gap-4' htmlFor="email">Email:
        <input className='w-full border border-stone-300 p-2 rounded-xl' id="email" name="email" type="email" required />
      </label>
      <label className='flex items-center justify-between gap-4' htmlFor="password">Password:
        <input className='w-full border border-stone-300 p-2 rounded-xl' id="password" name="password" type="password" required />
      </label>
      <div className='flex justify-around gap-4'>
        <button className='w-full border border-stone-300 p-2 rounded-xl cursor-pointer hover:shadow-md active:bg-green-100' formAction={login}>Log in</button>
        <button className='w-full border border-stone-300 p-2 rounded-xl cursor-pointer hover:shadow-md active:bg-green-100' formAction={signup}>Sign up</button>
      </div>
    </form>
  );
}