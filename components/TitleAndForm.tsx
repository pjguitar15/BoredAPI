'use client'
// import { useGlobalContext } from '@/context/BoredApiContext'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
const TitleAndForm = () => {
  // const { inputVal, setInputVal } = useGlobalContext()
  const [inputVal, setInputVal] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const handleSubmit = (event: any) => {
    event.preventDefault()
    setInputVal('')
    router.push(`/search?searchItem=${inputVal}`)
  }

  console.log(pathname)
  return (
    <div>
      <div className='bg-black py-36 flex items-center justify-center'>
        <h1 className='text-white text-5xl font-bold uppercase'>Bored API</h1>
      </div>
      {/* Form container */}
      <div className='w-1/3 -mt-7 mx-auto'>
        {pathname === '/' ? (
          <form onSubmit={handleSubmit}>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className='bg-gray-50 px-8 py-5 w-full rounded-full shadow-md outline-black'
              type='text'
              placeholder='For how many people? Ex. 4 persons'
            />
          </form>
        ) : (
          <div className='text-center pt-4'>
            <Link
              className='bg-yellow-500 px-8 py-5 w-full rounded-full shadow-md text-black font-bold'
              href='/'
            >
              GO BACK HOME
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default TitleAndForm
