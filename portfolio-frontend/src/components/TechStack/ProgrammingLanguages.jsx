import javaIcon from'../../assets/TechIcons/Icons/icons8-java-48.png'
import pythonIcon from '../../assets/TechIcons/Icons/icons8-python-48.png'
import reactIcon from '../../assets/TechIcons/Icons/icons8-react-40.png'
import htmlIcon from '../../assets/TechIcons/Icons/icons8-html-48.png'
import cssIcon from '../../assets/TechIcons/Icons/icons8-css-48.png'
import tailwindIcon from '../../assets/TechIcons/Icons/icons8-tailwind-css-48.png'
import cIcon from '../../assets/TechIcons/Icons/icons8-c-48.png'
import springBootIcon from '../../assets/TechIcons/Icons/icons8-spring-boot-40.png'
import unityIcon from '../../assets/TechIcons/Icons/icons8-unity-50.png'
import jenkinsIcon from '../../assets/TechIcons/Icons/icons8-jenkins-48.png'
import sonarQubeSVG from '../../assets/TechIcons/Icons/sonarqube.svg'
import gitLogo from '../../assets/TechIcons/Icons/icons8-git-48.png'
import seleniumLogo from '../../assets/TechIcons/Icons/icons8-selenium-48.png'
import cucumberLogo from '../../assets/TechIcons/Icons/Cucumber.png'
import junitLogo from '../../assets/TechIcons/Icons/JUnit.png'
import jMeterLogo from '../../assets/TechIcons/Icons/apple-touch-icon.png'


function ProgrammingLanguages() {
    return (

        <section className="py-10 text-white">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-10 rounded-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 max-w-5xl m-auto">
                {[
                    { name: "Java", description: "Programming Language", icon: <img src={javaIcon} />},
                    { name: "Python", description: "Programming Language", icon: <img src={pythonIcon} />},
                    { name: "HTML", description: "Markup Language", icon: <img src={htmlIcon} />},
                    { name: "CSS", description: "Styling Language", icon: <img src={cssIcon} />},
                    { name: "Tailwind", description: "Styling Language", icon: <img src={tailwindIcon} />},
                    { name: "C#", description: "Programming Language", icon: <img src={cIcon} /> },
                    { name: "React", description: "Frontend Library", icon: <img src={reactIcon} />},
                    { name: "Spring Boot", description: "Java Framework", icon: <img src={springBootIcon} />},
                    { name: "Unity", description: "Game Development Platform", icon: <img src={unityIcon} />},
                    { name: "Jenkins", description: "CI/CD Tool", icon: <img src={jenkinsIcon} />},
                    { name: "SonarQube", description: "Code Quality Tool", icon: <img src={sonarQubeSVG} />},
                    { name: "Git", description: "Version Control", icon: <img src={gitLogo} />},
                    { name: "Selenium", description: "Test Automation Tool", icon: <img src={seleniumLogo} />},
                    { name: "Cucumber", description: "Behavior-Driven Development (BDD) Tool", icon: <img className='h-10 w-10' src={cucumberLogo} />},
                    { name: "JUnit", description: "Testing Framework", icon: <img className='h-10 w-10' src={junitLogo} />},
                    { name: "JMeter", description: "Testing Tool", icon: <img src={jMeterLogo} />},
                ].map((tech, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 shadow-md col-span-${tech.colSpan} row-span-${tech.rowSpan}`}
                    >
                        <div className="text-lg mb-2">{tech.icon}</div>
                        <h3 className="text-2xl font-bold text-center">{tech.name}</h3>
                        <p className="text-sm text-gray-500">{tech.description}</p>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default ProgrammingLanguages