import React,{useState} from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { RotatingLines } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    password: Yup.string().required('Required!'),
});


const LoginForm = ({logina, setLogina}) => {
    const [loading, setLoading] = useState(false)
    const handleLogin = async (values) => {
        setLoading(true)
        try {
            const response = await axios.post('https://hapsie.herokuapp.com/api/auth', values)
            console.log('login successful')
            console.log(response)
            setLogina(true)
            setLoading(false)
        }
        catch(error){
            console.log('Error Occured!')
            console.log(error)
            setLoading(false)
        }
    }


    
  return (
    <div>
          <Formik
              initialValues={{
                  password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
          >
              {({ errors, touched }) => (
                  <Form className='w-full flex flex-col gap-5'>
                      {logina && <Navigate to={'/edit'} />}
                      <div className="w-[100%] flex flex-col gap-5 z-50">
                          <div className='flex flex-col w-[100%]'>
                              <label className='font-bold mb-1 text-lg text-left' htmlFor="password">Password*</label>
                              <Field name="password" type="password" placeholder='Enter your password'
                                  style={{ height: '50px', border: '2px solid black', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'black' }} />
                              {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
                          </div>
                      </div>

                      <div className='w-[100%]'>
                          <div className='flex justify-center py-5 '>
                              <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', border: "none", padding: '10px', width: '100%' }} className='z-40 font-semibold uppercase border-2 border-gray-300 text-white '>{
                                  loading ? <div className='flex justify-center items-center'>
                                      <RotatingLines
                                          strokeColor="grey"
                                          strokeWidth="5"
                                          animationDuration="0.75"
                                          width="20"
                                          visible={true}
                                      />
                                      <p className='text-[gray]'>loading...</p>
                                  </div> : <p>Login</p>
                              }</button>

                          </div>
                      </div>
                  </Form>
              )}
          </Formik>
    </div>
  )
}

export default LoginForm


