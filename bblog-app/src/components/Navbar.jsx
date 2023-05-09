
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-center  border-b-4 border-black '>
        <Link className='p-3  hover:bg-black hover:text-white' to='/'>Home</Link>
        <Link className='p-3  hover:bg-black hover:text-white' to='/about'>About</Link>
        <Link className='p-3 hover:bg-black hover:text-white' to='/articles'>Articles</Link>
        <Link className='p-3  hover:bg-black hover:text-white' to='/saved-articles'>Saved Articles</Link>
      </nav>
    </>
  )
}

export default Navbar