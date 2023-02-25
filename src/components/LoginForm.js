import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RotatingLines } from 'react-loader-spinner';
import { useAuthContext } from '../context/auth/auth';
import { Navigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required!'),
    password: Yup.string().required('Required!'),
});


const LoginForm = () => {
    const { login, isAuth, loading } = useAuthContext()
  return (
    <div>
          <Formik
              initialValues={{
                  email: '',
                  password: '',
              }}
              validationSchema={LoginSchema}
              onSubmit={values => {
                  login(values);
                // console.log(values)
              }}
          >
              {({ errors, touched }) => (
                  <Form className='w-full flex flex-col gap-5'>
                      {isAuth && <Navigate to={'/edit'} />}
                      <div className="w-[100%] flex flex-col gap-5 z-50">
                          <div className='flex flex-col w-[100%]'>
                              <label className='font-bold mb-1 text-lg text-left' htmlFor="email">E-mail*</label>
                              <Field name="email" type="email" placeholder='Enter your email address'
                                  style={{ height: '50px', border: '2px solid black', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'black' }} />
                              {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
                          </div>
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


