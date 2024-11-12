import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth, signIn, signOut } from '../app/auth'

const Navbar = async() => {
  const session = await auth();
  const users = await fetch('http://localhost:3000/user', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res =>res.json());
  if(session?.user && users.every((item:any) => item.name !== session.user?.name)) {
    // 注册用户
    fetch('http://localhost:3000/user', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...session.user,
        password: session.user.name
      })
    }).then(res =>res.json()).then(res =>{
      console.log('res',res);
    })
  }
  return (
    <header className='px-5 py-3 shadow-sm font-work-sans font-[900] bg-gray sticky top-0 z-10'>
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
                <Link href={`/user`}>
                  <li className='cursor-pointer text-amber-900 glow-animation font-bold'>{session?.user?.name}</li>
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
