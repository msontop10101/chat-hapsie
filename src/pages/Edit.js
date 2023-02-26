import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EditContentForm from '../components/EditContentForm'
import { Navigate } from 'react-router-dom'

const Edit = ({ loginState }) => {
  return (
    <div>
          {!loginState && <Navigate to={'/admin'} />}
          <div className='h-screen bg-red-500'>
              <Header />
              <div className='flex justify-center'>
                  <div className='flex justify-center h-[80vh] w-full md:w-[60%] items-center bg-white rounded-3xl'>
                      <div className='w-[90%]'>
                        <EditContentForm/>
                      </div>
                  </div>
              </div>
              <Footer />
          </div>
    </div>
  )
}

export default Edit