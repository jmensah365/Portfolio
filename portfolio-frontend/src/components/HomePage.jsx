import '../App.css'
import CertificationSection from './Certifications/CertificationSection'
import SDECard from './CheckOutMyExperience/SDECard'
import SDETCard from './CheckOutMyExperience/SDETCard'
import EducationSection from './Education/EducationSection'
import Footer from './Footer/Footer'
import NavBar from './Navigation/NavBar'
import ProfilePicture from './ProfilePictureSection/ProfilePicture'
import ProgrammingLanguages from './TechStack/ProgrammingLanguages'


function HomePage () {
    return (
        <>
            {/* Overarching div that contains main content */}
            <div className='bg-slate-950 min-h-screen'>
                {/* Nav Section */}
                <NavBar/>
                {/* Profile picture section */}
                <ProfilePicture/>
                {/* About me and Education Section */}
                <EducationSection/>
                {/* Certifications */}
                <CertificationSection/>
                {/* Tech Stack */}
                <h1 className='flex text-white justify-center items-center mt-20 font-bold text-5xl'>Tech Stack</h1>
                <ProgrammingLanguages/>
                <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center md:space-x-10 '>
                    <SDECard/>
                    <SDETCard/>
                </div>
                {/* <div className='flex justify-center items-center h-screen'>
                    <embed src='/JM_Resume.pdf' type='application/pdf' className='w-full max-w-screen-md h-full max-h-screen-md border rounded=lg'/>
                </div> */}
                
                <Footer/>
            </div>
        </>
    )
}

export default HomePage