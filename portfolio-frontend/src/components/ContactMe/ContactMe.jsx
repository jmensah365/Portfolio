import NavBar from "../Navigation/NavBar"

function ContactMe () {
    return (
        <div className='bg-slate-950 min-h-screen flex items-center justify-center'>
            <div className="border-2 border-gray-400 px-10 py-10 rounded-2xl">
            <section className="py-10 text-white">
                <NavBar/>
                    <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                    <form className="flex flex-col gap-4" action="https://getform.io/f/bqoklmob" method="POST">
                        <input type="text" name="name" placeholder="Name" required className="p-2 border rounded" />
                        <input type="email" name="email" placeholder="Email" required className="p-2 border rounded" />
                        <textarea name="message" placeholder="Message" required className="p-2 border rounded"></textarea>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">Send</button>
                    </form>
            </section>
            </div>
        </div>
    )
}

export default ContactMe