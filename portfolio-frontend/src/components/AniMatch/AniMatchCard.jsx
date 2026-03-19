import React from 'react'

export default function AniMatchCard() {
    return (
        <div className="relative max-w-xl h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
            {/* Background Image */}
            <img 
                src="/AniMatch.png"
                alt="AniMatch preview"
                className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-xl font-bold">AniMatch</h2>
                <p className="text-sm text-gray-400">
                    Personalized anime recommendations powered by Node.js, Supabase, React, & Gemini AI
                </p>
                
                {/* Links */}
                <div className="mt-3 flex space-x-3">
                    <a 
                        href="https://github.com/jmensah365/AnimeNexus"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-1.5 px-3 rounded-lg"
                    >
                        GitHub
                    </a>
                    <a
                        href='https://www.animatch.dev/'
                        target='_blank'
                        rel="noopener noreferrer"
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-1.5 px-3 rounded-lg"
                    >
                        AniMatch
                    </a>
                </div>
            </div>
        </div>
    )
}
