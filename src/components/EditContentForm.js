import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const EditContentForm = () => {
  const [initialData, setInitialData] = useState()
  const [loading, setLoading] = useState(false)
  const [newData, setNewData] = useState({
    input: ''
  })
  useEffect(() => {
    axios.get('https://hapsie.herokuapp.com/api/data/read')
      .then((response) => {
        console.log(response)
        setInitialData(response.data.data.message)
      })
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    // axios.post('https://86ad-102-89-46-249.eu.ngrok.io/api/data/write', { message: newData.input })
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // console.log(newData)
    const message = newData
    fetch('https://hapsie.herokuapp.com/api/data/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message
      })
    }).then((response) => console.log(response))
      .catch(err => console.log(err))
    console.log(newData)

  }

  return (
    <>
      <div className='flex flex-col gap-2'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-semibold text-xl'>Initial</label>
            <textarea style={{ border: '2px solid black', borderRadius: '10px', height: '25vh', padding: '5px' }} value={initialData} />
          </div>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-semibold text-xl'>New Content</label>
            <textarea style={{ border: '2px solid black', borderRadius: '10px', height: '25vh', padding: '5px' }} value={newData.input} onChange={(e) => setNewData(e.target.value)} />
          </div>

          <div>
            <button type='submit' className='bg-black text-white font-xl p-4 my-2 rounded-xl w-full text-center'>Submit</button>
            <Link to='/admin'><button className='bg-black text-white font-xl p-4 my-2 rounded-xl w-full text-center'>Logout</button></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditContentForm