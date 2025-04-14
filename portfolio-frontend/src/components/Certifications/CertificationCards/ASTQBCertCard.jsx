import '../../../App.css'
import ASTQBCert from '../../../assets/ASTQBCertificate-1.png'

function ASTQBCertCard() {
    return (
        <div className='flex flex-col items-center justify-center text-center border-2 border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-8 w-96'>
            <p className='mb-4 font-semibold'>Certified Tester Foundation Level</p>
            <img src={ASTQBCert} />
        </div>
    )
}

export default ASTQBCertCard