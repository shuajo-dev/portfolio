import ProjectCard from './ProjectCard'
import pacerLogo from '../assets/projects/pacer.jpg'

function Projects(){
    return(
        <section className="py-20 px-8 bg-stone/20" id="projects">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-sage mb-3 text-center">
            Selected Work
            </p>
            <h2 className="font-heading text-4xl font-bold text-deep-green text-center">
            Personal Projects
            </h2>
            <p className="font-body text-charcoal/60 text-center mb-12">
            What I build when nobody's asking me to. The rest lives in private repos.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <ProjectCard
                title="Pacer"
                description="A gamified running app with training plans. Race your own ghost. Built with the love for running."
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