import { useNavigate } from 'react-router-dom'
import sweLogo from '../../assets/TechIcons/Icons/icons8-software-developer-64.png'


function SDECard() {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path)
    }
    return (
        <section className= ' text-white'>
        <div className='flex items-center justify-center'>
            <div onClick={() => navigateTo('/SDE')} className="flex flex-col border-2 border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-8 w-96 cursor-pointer hover:animate-pulse">
                <h3 className="text-xl font-bold mb-5 text-center">Check out my SDE Experience!</h3>
                {/* <div className="border-2 border-gray-700 rounded-2xl mb-5 overflow-hidden"> */}
                    <img 
                        className="h-24 w-24 m-auto"
                        src={sweLogo}
                        alt="COMPS Senior Project"
                    />
                {/* </div> */}
            </div>
        </div>
        </section>
    )
}
export default SDECard