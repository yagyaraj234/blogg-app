import React from 'react'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
    return (
        < div className=' m-auto flex flex-col pt-5 w-2/6 '>
        <h1 className='text-3xl text-center mb-5'>Create a New Account</h1>
        <label  className='text-lg'>Name</label>
        <input className='my-1 py-1 border rounded outline-none border-2' type="text" placeholder='Enter your name'/>
        <label  className='text-lg'>Email</label>
        <input className='my-1 py-1 border rounded outline-none border-2' type="text" placeholder='Enter you mail'/>
        
        <label className='text-lg mt-2'>Password</label>
        <input className='border rounded outline-none border-2 py-1 my-1' type="text" placeholder='Password'/>
        <p className='text-xs '>Already Have Account ? <Link className='text-blue-500' to='/login'>Login Here.</Link></p>
    
        <button className='py-1 mt-5 border rounded hover:bg-gray-400 '>Register Now</button>
    
        </div>
      )
}

export default CreateAccount