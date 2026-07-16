type ProjectCardProps = {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
  image?: string
}

function ProjectCard({ title, description, tags, githubUrl, liveUrl, featured, image }: ProjectCardProps) {
  return (
    <div
      className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'md:col-span-2 bg-deep-green text-cream shadow-xl hover:shadow-2xl'
          : 'bg-cream text-charcoal border border-stone hover:border-deep-green hover:shadow-lg'
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          {image && (
            <img
              src={image}
              alt={`${title} logo`}
              className="w-14 h-14 rounded-xl object-cover mb-5 ring-1 ring-black/10"
            />
          )}
          <h3 className="font-heading text-3xl font-bold tracking-tight">
            {title}
          </h3>
          <p className={`font-body mt-3 leading-relaxed ${featured ? 'text-cream/80' : 'text-charcoal/80'}`}>
            {description}
          </p>
        </div>
      </div>
       <div className="mt-6">
        <p className="font-body text-xs uppercase tracking-wider opacity-50 mb-2">
            Tech Stack
        </p>
        <div className="flex flex-wrap items-center">
            {tags.map((tag, i) => (
            <span
                key={tag}
                className="font-body text-xs uppercase tracking-wider text-sage flex items-center"
            >
                {tag}
                {i < tags.length - 1 && <span className="opacity-40 mx-3">·</span>}
            </span>
            ))}
        </div>
        </div>

      <div className="flex gap-6 mt-6 pt-6 border-t border-current/10">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm font-medium underline-offset-4 hover:underline"
        >
          View Code →
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium underline-offset-4 hover:underline"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard