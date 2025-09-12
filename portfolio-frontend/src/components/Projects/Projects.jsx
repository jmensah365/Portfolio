// ./Projects/ProjectsSection.jsx
import React from 'react'
import AniMatchCard from '../AniMatch/AniMatchCard'

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-black py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
                    Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-10 justify-items-center">
                    <AniMatchCard />
                    {/* Add more project cards here in the future */}
                </div>
            </div>
        </section>
    )
}
