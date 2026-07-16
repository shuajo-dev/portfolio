type ProjectCardProps = {

    title: string
    description: string
    tags: string[]
    githubUrl: string
    liveUrl?: string
    featured: boolean
    image?:string

}

function ProjectCard({ title, description, tags, githubUrl, liveUrl, featured, image}: ProjectCardProps) {
    return (
        <div className={`rounded-lg border border-stone p-6 ${featured ? 'md:col-span-2 bg-deep-green text-cream' : 'bg-cream text-charcoal'}`}>
        {image && (
            <img
            src={image}
            alt={`${title} logo`}
            className="w-16 h-16 rounded-lg object-cover mb-4"
            />
        )}
        <h3 className="font-heading text-2xl font-bold">{title}</h3>
        <p className="font-body mt-3">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
            <span key={tag} className="text-xs font-body px-2 py-1 rounded-full border border-current">
                {tag}
            </span>
            ))}
        </div>
        <div className="flex gap-4 mt-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-body underline">
            GitHub
            </a>
            {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="font-body underline">
                Live Demo
            </a>
            )}
        </div>
        </div>
    )

}

export default ProjectCard
    