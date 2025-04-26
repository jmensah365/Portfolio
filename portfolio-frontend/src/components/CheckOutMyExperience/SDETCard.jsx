import { useNavigate } from 'react-router-dom'
import sdetLogo from '../../assets/TechIcons/Icons/icons8-software-testing-64.png'


function SDETCard() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path)
    }
    return (
        <section className=' text-white'>
            <div className='flex items-center justify-center'>
                <div onClick={() => navigateTo('/SDET')} className="flex flex-col border-2 border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-8 w-96 cursor-pointer hover:animate-pulse  hover:outline-4 outline-blue-400 hover:outline-double">
                    <h3 className="text-xl font-bold mb-5 text-center">Check out my SDET Experience!</h3>
                    {/* <div className="border-2 border-gray-700 rounded-2xl mb-5 overflow-hidden"> */}
                    <img
                        className="h-24 w-24 m-auto"
                        src={sdetLogo}
                        alt="Software Engineer in Test Logo"
                    />
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}
export default SDETCard