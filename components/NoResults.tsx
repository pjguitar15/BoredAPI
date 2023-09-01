import React from 'react'

const NoResults = () => {
  return (
    <div className='bg-gray-200 p-12 mt-10'>
      <h4 className='text-2xl text-center'>No Results</h4>
      <p className='text-center text-gray-500 mt-2'>
        API does not have results for this. Or you might have typed incorrectly.
      </p>
    </div>
  )
}

export default NoResults
