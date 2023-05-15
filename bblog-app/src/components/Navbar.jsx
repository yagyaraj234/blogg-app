
import { Link } from 'react-router-dom'
import useUser from '../hooks/useUser'

import { getAuth,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const user =useUser();

  const navigate=useNavigate();
  return (
    <>
      <nav className='flex justify-center  border-b-4 border-black '>
        <Link className='p-3  hover:bg-black hover:text-white' to='/'>Home</Link>
        <Link className='p-3  hover:bg-black hover:text-white' to='/about'>About</Link>
        <Link className='p-3 hover:bg-black hover:text-white' to='/articles'>Articles</Link>
        <Link className='p-3  hover:bg-black hover:text-white' to='/saved-articles'>Saved Articles</Link>
        <div>{user?<button onClick={()=>{signOut(getAuth())}}>LogOut</button>:<button onClick={()=>navigate('/login')}></button>}</div>
      </nav>
      
        
    </>
  )
}

export default Navbar