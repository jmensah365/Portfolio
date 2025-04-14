import DHSCert from '../../../assets/Jeremiah Mensah (2)-1.png'
import '../../../App.css'

function DHSCertCard() {
    return (
        <div className='flex flex-col items-center justify-center text-center border-2 border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-8 w-96'>
            <p className='mb-4 font-semibold'>DHS Trusted Tester Certification</p>
            <img src={DHSCert} />
        </div>
    )
}

export default DHSCertCard