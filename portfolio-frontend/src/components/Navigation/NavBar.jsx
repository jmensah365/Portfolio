import { useNavigate } from 'react-router-dom'
import '../../App.css'
import { useState } from 'react';

function NavBar() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    }

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 rounded-b-2xl text-white'>
            <div className='flex justify-between px-10 py-4 text-lg'>
                <div>
                    <a onClick={() => navigateTo('/')} className=' hover:text-sky-300 cursor-pointer'>Jeremiah Mensah</a>
                </div>
                <div className='flex-1'>
                    <ul className='flex space-x-8 justify-center'>
                        <a onClick={() => navigateTo('/SDE')} className='hover:text-sky-300 cursor-pointer'>SDE Experience</a>
                        <a onClick={() => navigateTo('/SDET')} className='hover:text-sky-300 cursor-pointer'>SDET Experience</a>
                        <a onClick={() => navigateTo('/')} href='#AboutSection' className='hover:text-sky-300 cursor-pointer'> About </a>
                        <a onClick={() => navigateTo('/ContactMe')} className='hover:text-sky-300 cursor-pointer'>Contact</a>
                    </ul>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className='md:hidden flex flex-col items-center py-4 space-y-4'>
                    <a onClick={() => navigateTo('/SDE')} className='hover:text-sky-300 cursor-pointer'>SDE Experience</a>
                    <a onClick={() => navigateTo('/SDET')} className='hover:text-sky-300 cursor-pointer'>SDET Experience</a>
                    <a onClick={() => navigateTo('/')} href='#AboutSection' className='hover:text-sky-300 cursor-pointer'>About</a>
                    <a onClick={() => navigateTo('/ContactMe')} className='hover:text-sky-300 cursor-pointer'>Contact</a>
                </div>
            )}

        </nav>
    )
}

export default NavBar