import AWSBadge from '../../../assets/aws-certified-cloud-practitioner.png'
import '../../../App.css'

function AWSCert() {
    return (
        <div className='flex flex-col items-center justify-center text-center border-2 border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-8 w-96'>
            <p className='mb-4 font-semibold'>AWS Certified Cloud Practitioner</p>
            <img src={AWSBadge} />
            <a
                href='https://www.credly.com/badges/e705da4d-640b-4138-897c-dbbab65c8fa7/public_url'
                target='_blank'
                className='font-semibold mt-8 hover:bg-blue-600 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-full shadow-xl/30 ring-2 px-2 py-1'
            >
                Credly
                </a>
        </div>
    )
}

export default AWSCert