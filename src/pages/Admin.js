import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import { useAuthContext } from '../context/auth/auth';

const Admin = () => {
    const { error } = useAuthContext()
  return (
    <>
        <div className='h-screen bg-red-500'>
            <Header/>
              {error && <p className='bg-[#ec6363] z-30 text-white p-2 text-center'>Email/Password is invalid</p>}
            <div className='flex justify-center'>
                  <div className='flex justify-center h-[80vh] w-full md:w-[60%] items-center bg-white rounded-3xl'>
                      <div className='w-[90%]'><LoginForm/></div>
                  </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Admin