import '../../App.css'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'
import externalLink from '../../assets/TechIcons/Icons/icons8-external-link.svg'



function SDEPage () {
    return (
        <div className='bg-black min-h-screen animate-fade-left'>
        {/* Nav Section */}
        <NavBar/>
        <section className='py-10 text-white'>
            <div className='max-w-5xl mx-auto px-6'>
                <h2 className='text-4xl font-bold text-center mt-10'>SDE Experience</h2>
                <div className='relative border-l border-gray-700'>
                    <div className='mb-10 ml-8'>
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-400 rounded-full">
                            <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
                            </svg>
                        </span>
                        <h4 className='text-2xl font-bold text-green-400'>SkillStorm</h4>
                        <p className='text-sm text-white'>July 2024 - April 2025</p>
                        <p className='text-xs md:text-sm'> 
                            <a
                                className='text-blue-500 underline inline-flex items-center justify-center'
                                href='http://jm-cim-frontend.s3-website-us-east-1.amazonaws.com/'
                                target='_blank'
                            >
                                Inventory Management System
                                <img className='w-5 pl-0.5' src={externalLink}/>
                            </a>
                        </p>
                        <p className='mb-2 text-xs md:text-sm'> 
                            <a
                                className='text-blue-500 underline inline-flex items-center justify-center'
                                href='https://github.com/jmensah365/Sweet2Neat'
                                target='_blank'
                            >
                                Github
                                <img className='w-5 pl-0.5' src={externalLink}/>
                                </a>
                        </p>
                        <p className='text-sm'>
                        Developed a full-stack Inventory Management System using Spring Boot, PostgreSQL, and ReactJS, enabling efficient inventory tracking with CRUD functionality. 
                        I designed and implemented a PostgreSQL database with five entities to manage inventory, orders, stock, and warehouses. 
                        On the backend, I built and exposed RESTful APIs while also assisting in deploying the frontend, backend, and database to AWS. 
                        Additionally, I conducted unit testing with Mockito and TestNG, and functional tests with Selenium and Cucumber while ensuring high code quality using SonarQube. 
                        I also helped configure a Jenkins pipeline for CI/CD, automating the build and testing process.
                        </p>
                        <ul className='list-disc list-inside space-y-2 text-sm mt-4 ml-10'>
                                <li>Developed a full-stack candy inventory management solution using SpringBoot, PostgreSQL, and ReactJS, providing CRUD functionality</li>
                                <li>Implemented and exposed RESTful APIs for CRUD operations on inventory items, orders, stock, and warehouse data, ensuring seamless interaction between frontend and backend services</li>
                                <li>Optimized database design and integrity using PostgreSQL for scalable and efficient data handling</li>
                                <li>Performed backend unit tests with Mockito and TestNG, validating core functionalities and code reliability</li>
                                <li>Utilized SonarQube for static code analysis, ensuring high code quality and adherence to OWASP security standards</li>
                                <li>Configured Jenkins pipelines for continuous integration and deployment (CI/CD), automating build and testing processes.</li>
                        </ul>
                    </div>
                    
                    <div className='mb-10 ml-8'>
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-400 rounded-full">
                            <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
                            </svg>
                            </span>
                        <h4 className='text-2xl font-bold text-blue-400'>Wells Fargo</h4>
                        <p className='text-sm text-white'>June 2022 - August 2022</p>
                        <ul className='list-disc list-inside space-y-2 text-sm mt-4 ml-10'>
                            <li>Leveraged the Agile software development lifecycle to streamline workflows and enhance efficiency</li>
                            <li>Utilized ReactJS, CSS, HTML, and PostmanAPI to build a web app to streamline corporate banking investment tracking</li>
                            <li>Collaborated with a team of 7 interns, devising a project that improved Wells Fargo’s university programs' social media outreach by 10%</li>
                            <li>Conducted and passed 8 unit tests on the web app, resolving 10 UI discrepancies and enhancing user satisfaction by 25%</li>
                            <li>Engineered a Java program leveraging Spring Framework and Symphony API, centralizing user and chatroom data and saving future developers over 10 hours of integration time</li>
                        </ul>
                    </div>
                </div>
                <Footer/>
            </div>
        </section>
    </div>
    )
}

export default SDEPage