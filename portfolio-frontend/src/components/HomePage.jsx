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
                <div className='flex flex-row justify-center items-center space-x-10'>
                    <SDECard/>
                    <SDETCard/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default HomePage