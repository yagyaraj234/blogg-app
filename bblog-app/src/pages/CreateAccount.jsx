import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword}from 'firebase/auth'

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

        const createAccount =async ()=>{
            try{
                if(password!==confirmPassword){
                    setError('Password doesn\'t match')
                    return;
                }
                await createUserWithEmailAndPassword(getAuth(),email,password);
                navigate('/login')
            }
            catch(e){
                setError(e.message);
            }
        }


    return (
        < div className=' m-auto flex flex-col pt-5 w-2/6  pb-5'>
            <h1 className='text-3xl text-center mb-5'>Create a New Account</h1>
            {error && <p className='bg-red-400 text-gray-700'>{error}</p>}
            {/* <label className='text-lg'>Name</label>
            <input className='my-1 py-1 border rounded outline-none border-2' type="text" placeholder='Enter your name' /> */}
            <label className='text-lg'>Email</label>
            <input className='my-1 py-1 border rounded outline-none border-2' type="text" placeholder='Enter you mail'
                value={email} onChange={e => setEmail(e.target.value)} />

            <label className='text-lg mt-2'>Password</label>
            <input className='border rounded outline-none border-2 py-1 my-1' type="password" placeholder='Password'
                value={password} onChange={e => setPassword(e.target.value)} />
            <label className='text-lg mt-2'>Confirm Password</label>
            <input className='border rounded outline-none border-2 py-1 my-1' type="password" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <p className='text-xs '>Already Have Account ? <Link className='text-blue-500' to='/login'>Login Here.</Link></p>

            <button onClick={createAccount} className='py-1 mt-5 border rounded hover:bg-gray-400 '>Create Account</button>

        </div>
    )
}

export default CreateAccount