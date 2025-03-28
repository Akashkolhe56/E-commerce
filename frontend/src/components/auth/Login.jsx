import {React, useState} from 'react';
import {Link} from 'react-router-dom';
const Login=()=>{
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")

    return(
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Login into your account
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <form className='space-y-6'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
                        <div className='mt-1'>
                            <input type="email" name='email' placeholder= 'email-enter'  autoComplete='email' required value={email} onChange={(e)=>setEmail(e.target.value)} className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                        </div>
                        
                    </div>



                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                        <div className='mt-1'>
                            <input type="password" name='password' placeholder= 'enter-password'  autoComplete='password' required value={password} onChange={(e)=>setPassword(e.target.value)} className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <input type="Checkbox" name='remeber-me' id='remember-me' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'  />
                            <label htmlFor="remeber-me" className='ml-2 block text-sm text-gray-900'>Remember me</label>
                        </div>
                        <div className='text-sm'>
                            <a href=".forgot-password" className='font-medium text-blue-600 hover:text-blue-500'>Forgot Password?</a>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className=' relative w-full h-6 flex justify-center text-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>Submit</button>
                    </div>
                    <p className='text-center'>
                        Donot have account? <Link to={'/signup'} className='text-blue-600'>Signup</Link>
                    </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;