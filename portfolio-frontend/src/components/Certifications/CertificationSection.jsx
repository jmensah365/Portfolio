import '../../App.css'
import JavaCertCard from './CertificationCards/JavaCertCard'
import ASTQBCertCard from './CertificationCards/ASTQBCertCard'
import DHSCertCard from './CertificationCards/DHSCertCard'

function CertificationSection() {
    return (
        <section>
            <div className='flex flex-col items-center justify-center text-white pt-48'>
                <h1 className='font-bold text-5xl pb-5'>Certifications</h1>
                <div className='flex flex-wrap justify-center gap-10'>
                    {/* Java Certification Card */}
                    <JavaCertCard />
                    {/* ASTQB Certification Card */}
                    <ASTQBCertCard />
                    {/* DHS Certification Card */}
                    <DHSCertCard />
                </div>
            </div>
            {/* Accessibility Certifications */}
        </section>
    )
}

export default CertificationSection