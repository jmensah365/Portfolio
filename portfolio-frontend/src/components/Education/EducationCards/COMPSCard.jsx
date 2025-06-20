import headshot from '../../../assets/IMG_9276.png'
import './COMPSCard.css'
function COMPSCard() {
    return (
        //border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
        <div id='card-wrapper' className="flex flex-col shadow-lg p-8 w-96 h-96">
            <h3 className="text-xl font-bold mb-5 text-center">COMPS Senior Project</h3>
            <div className=" mb-5 overflow-hidden text-center">
                
                <div id='card-content' className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold mb-4'>Description:</p>
                    <p>Clustering is a fundamental concept in machine learning and data analysis.
                        It partitions data points into clusters, with the primary aim of uncovering inherent patterns within a dataset.
                        For our group’s project, we wanted to explore the roles of demographic bias and intersectionality in k-means clustering and clustering through fairlets and see which trends and patterns emerge from our dataset <span className='italic font-semibold'>High School Longitudinal Study of 2009</span>.</p>
                    <div className="text-center mt-6">
                        <a
                            href="https://cs.carleton.edu/cs_comps/2324/fairnessInClustering/final-results/index.html"
                            target="_blank"
                            className="px-4 py-2 text-white rounded-full hover:bg-blue-600 transition delay-100 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 shadow-lg ring-2"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default COMPSCard