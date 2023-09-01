import React from 'react'

interface ApiResultProps {
  keyItem?: string
  valueItem?: any
}

const ApiResultItem = ({ keyItem, valueItem }: ApiResultProps) => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center mt-5'>
        <div className='bg-gray-200 py-3 w-1/3'>
          <h5 className='text-center font-bold'>
            {keyItem || 'No Key Provided'}
          </h5>
        </div>
        <div className='bg-gray-100 py-3 w-1/3'>
          <h5 className='text-center'>{valueItem || 'No activity provided'}</h5>
        </div>
      </div>
    </div>
  )
}

export default ApiResultItem
