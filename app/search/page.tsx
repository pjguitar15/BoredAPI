import ApiResults from '@/components/ApiResults'
import NoResults from '@/components/NoResults'
import Image from 'next/image'
import React from 'react'

const page = async ({
  searchParams,
}: {
  searchParams: { searchItem: string }
}) => {
  // initial value
  let numberOfPerson: number = 0
  const sampleText = searchParams.searchItem
  const splitText = sampleText.split(' ')
  // to check if the given string includes a number
  const NUMBERS = '123456789010'
  splitText.forEach((item) => {
    if (NUMBERS.includes(item)) {
      const parsedString = parseInt(item)
      numberOfPerson = parsedString
    }
  })

  console.log('Value of number before fetch: ' + numberOfPerson)
  const data = await fetch(
    `http://www.boredapi.com/api/activity?participants=${numberOfPerson}`
  )
  const res = await data.json()
  console.log(res.error ? 'theres an error' : 'no errors')

  return (
    <div className='pb-28 pt-10'>
      <h1 className='text-3xl text-center mt-5'>
        Result for: {searchParams.searchItem}
      </h1>
      {!res.error ? <ApiResults apiResults={res} /> : <NoResults />}
    </div>
  )
}

export default page
