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
    <article
      className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? 'md:col-span-2 bg-deep-green text-cream shadow-xl hover:shadow-2xl'
          : 'bg-cream text-charcoal border border-stone hover:border-deep-green hover:shadow-lg'
      }`}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-8">
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-heading text-3xl font-bold tracking-tight">
            {title}
          </h3>
          {featured && (
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/60 border border-cream/30 rounded-full px-3 py-1 shrink-0">
              Featured
            </span>
          )}
        </div>
        <p className={`font-body mt-3 leading-relaxed ${featured ? 'text-cream/80' : 'text-charcoal/80'}`}>
          {description}
        </p>

        <div className="mt-6">
          <p className="font-body text-xs uppercase tracking-wider opacity-50 mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap items-center">
            {tags.map((tag, i) => (
              <span key={tag} className="font-body text-xs uppercase tracking-wider text-sage flex items-center">
                {tag}
                {i < tags.length - 1 && <span className="opacity-40 mx-3">·</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-6 pt-6 border-t border-current/10">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-medium underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
            View Code →
          </a>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="font-body text-sm font-medium underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard