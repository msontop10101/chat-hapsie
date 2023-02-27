import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const EditContentForm = ({ setLogina }) => {
  const [initialData, setInitialData] = useState()
  const [loading, setLoading] = useState(false)
  const [newData, setNewData] = useState({
    input: ''
  })
  useEffect(() => {
    axios.get('https://hapsie.herokuapp.com/api/data/read')
      .then((response) => {
        console.log(`RESPONSE: ${response}`)
        setInitialData(response.data.data.message)
      })
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const message = newData
    fetch('https://hapsie.herokuapp.com/api/data/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message
      })
    }).then((response) => { console.log(response); setLoading(false)})
      .catch(err => console.log(err))
    console.log(newData)
    console.log(initialData)

  }

  return (
    <>
      <div className='flex flex-col gap-2'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-semibold text-xl'>Initial</label>
            <textarea style={{ border: '2px solid black', borderRadius: '10px', height: '20vh', padding: '5px' }} value={initialData} />
          </div>
          <div className='flex flex-col w-full gap-2'>
            <label className='font-semibold text-xl'>New Content</label>
            <textarea style={{ border: '2px solid black', borderRadius: '10px', height: '20vh', padding: '5px' }} value={newData.input} onChange={(e) => setNewData(e.target.value)} />
          </div>

          <div>
            <button type='submit' className='bg-black text-white font-xl p-4 my-2 rounded-xl w-full text-center'>{loading ? 'Updating...': 'Submit'}</button>
            <Link to='/'><button className='bg-black text-white font-xl p-4 my-2 rounded-xl w-full text-center' onClick={() => { setLogina(false)}}>Logout</button></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditContentForm