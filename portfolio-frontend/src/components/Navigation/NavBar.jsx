import { useNavigate } from 'react-router-dom'
import '../../App.css'

function NavBar() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
    }
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
            </div>
        </nav>
    )
}

export default NavBar