import { useState } from "react";
import Footer from "../Footer/Footer"
import NavBar from "../Navigation/NavBar"

function ContactMe() {
    return (
        <div className='bg-slate-950 min-h-screen '>

            <div className=" px-10 py-10 rounded-2xl flex flex-col items-center justify-center max-w-5xl m-auto pt-20">
                <section className="py-10 text-white">
                    <NavBar />
                    <h2 className="text-4xl font-bold mb-4 text-center text-blue-400">
                        Contact Me
                    </h2>
                    <p className="text-center text-gray-300 mb-6">
                        Got a question or want to work together? Let me know!
                    </p>
                    <form
                        id="form"
                        className="flex flex-col gap-6"
                        action="https://getform.io/f/bqoklmob"
                        method="POST"
                    >
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name*"
                            required
                            className="p-3 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email*"
                            required
                            className="p-3 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message*"
                            required
                            rows="5"
                            className="p-3 border border-gray-600 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                        <button
                            id="submitBtn"
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                        >
                            Send Message
                        </button>
                        <p className="font-bold">*Please allow a few seconds for the form to submit*</p>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default ContactMe