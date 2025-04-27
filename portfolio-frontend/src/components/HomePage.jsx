import '../App.css'
import CertificationSection from './Certifications/CertificationSection'
import SDECard from './CheckOutMyExperience/SDECard'
import SDETCard from './CheckOutMyExperience/SDETCard'
import EducationSection from './Education/EducationSection'
import Footer from './Footer/Footer'
import NavBar from './Navigation/NavBar'
import ProfilePicture from './ProfilePictureSection/ProfilePicture'
import MyResume from './Resume/MyResume'
import ProgrammingLanguages from './TechStack/ProgrammingLanguages'


function HomePage () {
    return (
        <>
            {/* Overarching div that contains main content */}
            <div id='top_homepage' className='bg-black min-h-screen font-roboto'>
                {/* Nav Section */}
                <NavBar/>
                {/* Profile picture section */}
                <ProfilePicture/>
                {/* About me and Education Section */}
                <EducationSection/>
                {/* Certifications */}
                <CertificationSection/>
                {/* Tech Stack */}
                {/* <h1 className='flex text-white justify-center items-center mt-20 font-bold text-5xl'>Tech Stack</h1> */}
                <ProgrammingLanguages/>
                <div className='flex flex-col space-y-10 md:flex-row lg:flex-row justify-center items-center md:space-x-10 md:space-y-0 pt-20'>
                    <SDECard/>
                    <SDETCard/>
                </div>
                <MyResume/>
                
                <Footer/>
            </div>
        </>
    )
}

export default HomePage