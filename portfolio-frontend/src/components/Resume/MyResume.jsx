
function MyResume() {
    return (
        <div className='flex flex-col justify-center items-center h-screen pt-48 gap-5'>
                <h2 className='text-white text-5xl font-roboto font-bold' id='My Resume'>My Resume</h2>
                <embed src='/JM_04_25.pdf' type='application/pdf' className='w-full max-w-screen-md h-full max-h-screen-md border rounded=lg'/>
        </div>
    )
}

export default MyResume