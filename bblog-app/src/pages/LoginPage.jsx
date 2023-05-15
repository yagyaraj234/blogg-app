import {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'



const LoginPage = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const [error,setError]=useState('');
    const navigate =useNavigate();
    
    const logIn = async () =>{
      
      try{  await signInWithEmailAndPassword(getAuth(),email,password);
        navigate('/articles');
      } catch(e){
        setError(e.message);
      }
    }

  return (
    < div className=' m-auto flex flex-col pt-5 w-2/6 '>

    <h1 className='text-3xl text-center mb-5'>Login Your Account</h1>
    {error && <p className='bg-red-400 text-gray-700' >{error}</p>}
    <label  className='text-lg'>Email</label>
    <input  className='my-1 py-1 border rounded outline-none border-2' type="text" placeholder='Email' value={email}
    onChange={e =>setEmail(e.target.value)}/>
    
    <label className='text-lg mt-2'>Password</label>
    <input className='border rounded outline-none border-2 py-1 my-1' type="password" value={password} placeholder='Password'onChange={e =>setPassword(e.target.value)}/>
    <p className='text-xs '>Don't Have Account ? <Link className='text-blue-500' to='/register'>Register Here.</Link></p>

    <button className='py-1 mt-5 border rounded hover:bg-gray-400 ' onClick={logIn}>Login Now</button>

    </div>
  )
}

export default LoginPage