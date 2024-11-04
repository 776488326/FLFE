import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth, signIn, signOut } from '../app/auth'

const Navbar = async() => {
  const session = await auth();

  return (
    <header className='px-5 py-3 shadow-sm font-work-sans font-[900] bg-gray'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={'/logo.png'} alt='logo' width={48} height={48} />
        </Link>
        <ul className='flex gap-5'>
          {
            session && session?.user ? (
              <>
                <Link href={'/startup/create'}>
                  <li>注册</li>
                </Link>
                <form action={async () => {
                    "use server";
                    await signOut({ redirectTo: '/' });
                  }}>
                  <button type='submit'>退出</button>
                </form>
                <Link href={`/user/${session?.user?.id}`}>
                  <li>{session?.user?.name}</li>
                </Link>
              </>
            ) : (
              <form action={async ()=> {
                "use server";
                await signIn('github');
              }}>
                <button type="submit">登录</button>
              </form>
            )

          }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
