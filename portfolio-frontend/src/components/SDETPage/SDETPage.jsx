import '../../App.css'
import NavBar from '../Navigation/NavBar'
import Footer from '../Footer/Footer'
import externalLink from '../../assets/TechIcons/Icons/icons8-external-link.svg'

function SDETPage() {
    return(
            <div className='bg-black min-h-screen flex flex-col animate-fade-left'>
            {/* Nav Section */}
            <NavBar/>
            <section className='py-10 text-white flex-grow'>
                <div className='max-w-5xl mx-auto px-6'>
                    <h2 className='text-4xl font-bold text-center mt-10'>SDET Experience</h2>
                    <div className='relative border-l border-gray-700'>
                        <div className='mb-10 ml-8'>
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-400 rounded-full">
                                <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <h4 className='text-2xl font-bold text-blue-400' >SkillStorm</h4>
                            <p className='text-sm text-white'>July 2024 - April 2025</p>
                            <p className='mb-2 text-xs md:text-sm'>  
                            <a
                                className='text-blue-500 underline inline-flex items-center justify-center'
                                href='https://github.com/My-Budget-Buddy/Budget-Buddy-Frontend-Testing'
                                target='_blank'
                            >
                                Github
                                <img className='w-5 pl-0.5' src={externalLink}/>
                                </a>
                            </p>
                            <p className='text-sm'>
                            Budget Buddy focused on building a financial management application to help users track transactions and manage their budgets effectively. 
                            As part of the testing team, I conducted functional and acceptance tests using Selenium for UI automation, Cucumber for BDD scenarios, and TestNG to validate transaction page functionalities. 
                            I also ensured frontend reliability by testing React UI components with Jest, achieving 96.5% statement coverage and 96.35% line coverage on transaction pages. Working within an Agile team, I helped align testing efforts with evolving requirements and acceptance criteria.
                            </p>
                            <ul className='list-disc list-inside space-y-2 text-sm mt-4 ml-10'>
                                <li>Conducted functional and acceptance tests with Selenium (UI automation), Cucumber (BDD scenarios), and TestNG on transaction pages</li>
                                <li> Validated React UI components with Jest, achieving 96.5% statement coverage and 96.35% line coverage on the transactions page</li>
                                <li> Collaborated in an Agile team, following Agile testing practices for continuous alignment with requirements and acceptance criteria</li>
                            </ul>
                        </div>
                        <div className='mb-10 ml-8'>
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-400 rounded-full">
                                <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h2a1 1 0 100-2h-1V7z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <h4 className='text-2xl font-bold text-green-400'>SkillStorm</h4>
                            <p className='text-sm text-white'>July 2024 - Present</p>
                            <p className='mb-2 text-xs md:text-sm'>  
                            <a
                                className='text-blue-500 underline inline-flex justify-center items-center'
                                href='https://github.com/jmensah365/Sweet2Neat/tree/master/Testing'
                                target='_blank'
                            >
                                Github
                                <img className='w-5 pl-0.5' src={externalLink}/>
                                </a>
                            </p>
                            <ul className='list-disc list-inside space-y-2 text-sm mt-4 ml-10'>
                                <li>Followed a Test-Driven Development (TDD), creating user stories, writing maintainable code, and ensuring comprehensive test coverage with Selenium, Cucumber, and TestNG</li>
                                <li>Performed performance and stress testing using JMeter, identifying bottlenecks and optimizing system response times under high load</li>
                                <li>Utilized Burp Suite to identify and mitigate potential security vulnerabilities</li>
                                <li>Integrated functional, unit, and performance tests into the CI/CD pipeline, achieving fully automated testing</li>
                                <li>Conducted API testing using Postman, validating endpoint functionality and ensuring proper handling of requests and responses</li>
                                <li>Tracked user stories and work tasks in JIRA, allowing for an efficient workflow aligned with Agile development practices</li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </section>
            <Footer/>
        </div>
    )

}
export default SDETPage