import React from 'react'
import './navbar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../hooks/useAuth';
const Navbar = () => {
    const {logout} = useAuth();
  return (
    <div className='w-full h-[60px] bg-white border-b border-gray-300 flex items-center justify-end px-3 sm:px-5 lg:px-8'>
        <button className='mr-2 sm:mr-4 md:mr-6 text-white bg-blue-500 lg:mr-8 p-2 rounded-lg hover:bg-gray-100 hover:text-black transition' onClick={logout}>
            <LogoutIcon  fontSize='medium'/>
        </button>
    </div>
  )
}

export default Navbar;