import headshot from '../../../assets/IMG_9276.png'
function COMPSCard() {
    return (
        <div className="flex flex-col border-2 border-gray-700 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-8 w-96">
            <h3 className="text-xl font-bold mb-5 text-center">COMPS Senior Project</h3>
            <div className="border-2 border-gray-700 rounded-2xl mb-5 overflow-hidden">
                <img
                    className="h-48 w-full object-cover"
                    src={headshot}
                    alt="COMPS Senior Project"
                />
            </div>
            <div className="text-center">
                <a
                    href="https://github.com/riceboi732/CS-Comps"
                    target="_blank"
                    className="px-4 py-2 text-white rounded-full hover:bg-blue-600 transition delay-100 duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 shadow-md"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    )
}

export default COMPSCard