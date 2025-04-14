import reactIcon from '../../assets/TechIcons/Icons/icons8-react-40.png'
import springBootIcon from '../../assets/TechIcons/Icons/icons8-spring-boot-40.png'
import unityIcon from '../../assets/TechIcons/Icons/icons8-unity-50.png'
import jenkinsIcon from '../../assets/TechIcons/Icons/icons8-jenkins-48.png'
import sonarQubeSVG from '../../assets/TechIcons/Icons/sonarqube.svg'
function Technologies() {
    return (

        <section className="py-10 text-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 px-4 py-10 rounded-2xl bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
                {[
                    {name: "React", description: "Frontend Library", icon: <img src={reactIcon}/>},
                    {name: "Spring Boot", description: "Java Framework", icon: <img src={springBootIcon}/>},
                    {name: "Unity", description: "Game Development Platform", icon: <img src={unityIcon}/>},
                    {name: "Jenkins", description: "CI/CD Tool", icon: <img src={jenkinsIcon}/>},
                    {name: "SonarQube", description: "Code Quality Tool", icon: <img src={sonarQubeSVG}/>},
                ].map((tech,index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-3 rounded-md bg-gray-800 hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 shadow-md"
                    >
                        <div className="text-lg mb-2">{tech.icon}</div>
                        <h3 className="text-3xl font-bold">{tech.name}</h3>
                        <p className="text-xs text-gray-500">{tech.description}</p>
                    </div>
                ))}
            </div>

        </section>

    )
}

export default Technologies