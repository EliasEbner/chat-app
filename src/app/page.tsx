import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <div className='cursor-default select-none fixed w-screen top-0 left-0 h-14 bg-blue-300 flex justify-between px-12 items-center'>something</div>
      <div className='cursor-default select-none w-screen h-screen justify-center items-center flex'>
        <div className='flex-col justify-center'>
          <h1 className='text-6xl text-center'>this is a chat app.</h1>
          <h2 className='text-4xl text-center'>that actually works.</h2>
          <div className='flex flex-row mx-auto mt-5 justify-between w-1/2'>
            <Link href="/login">
            <h3 className='hover:scale-125 text-xl cursor-pointer'>login</h3>
            </Link>
            <h3 className='hover:scale-125 text-xl cursor-pointer'>register</h3>
            
          </div>
        </div>
      </div>
    </main>
  )
}
