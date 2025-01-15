import QuesitonForm from '@/components/forms/QuesitonForm'
import React from 'react'

const AskQuestion = () => {
  return (
    <>
      <h1 className='h1-bold text-dark100_light900'>Ask A Question</h1>

      <div className='mt-9'>
        <QuesitonForm />
      </div>
   
    </>

  )
}

export default AskQuestion