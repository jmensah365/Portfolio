import AboutMe from "./AboutMe"
import COMPSCard from "./EducationCards/COMPSCard"
import EducationCard from "./EducationCards/EducationCard"

function EducationSection() {
    return (
        <section>
        <div id="AboutSection" className="flex flex-col items-center text-white pt-48">
            <h2 className="text-5xl font-bold mb-10 text-shadow-lg/80">About Me</h2>
            {/* Education Section */}
            <div className="flex justify-center items-stretch gap-10">
                {/* COMPS Senior Project Card */}
                <COMPSCard/>
                {/* Education Card */}
                <EducationCard/>
            </div>
            <AboutMe/>
        </div>
        </section>
    )
}

export default EducationSection