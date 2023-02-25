import React from 'react'

const EditContentForm = () => {
  return (
    <>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col w-full gap-2'>
                <label className='font-semibold text-xl'>Initial</label>
                  <textarea style={{ border: '2px solid black', borderRadius: '10px',}} />
            </div>
              <div className='flex flex-col w-full gap-2'>
                  <label className='font-semibold text-xl'>New Content</label>
                  <textarea style={{ border: '2px solid black', borderRadius: '10px',}} />
              </div>
              <div>
                <button type='submit' className='bg-black text-white font-xl p-4 my-2 rounded-xl w-full text-center'>Submit</button>
              </div>
        </div>
    </>
  )
}

export default EditContentForm