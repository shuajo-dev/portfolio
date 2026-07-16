import ProjectCard from './ProjectCard'
import pacerLogo from '../assets/projects/pacer.jpg'

function Projects(){
    return(
        <section className="py-20 px-8 bg-stone/20">
            <h2 className="font-heading text-4xl font-bold text-deep-green text-center mb-12">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <ProjectCard
                title="Pacer"
                description="A gamified running app with training plans. Race your own ghost. Built with Laravel, React, and Tailwind"
                tags={['Laravel', 'React', 'TypeScript']}
                githubUrl="https://github.com/shuajo-dev/pacer"
                featured
                image={pacerLogo}
                />
            </div>
    </section>
    )
}

export default Projects