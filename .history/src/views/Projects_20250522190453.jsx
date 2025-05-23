export default function Projects() {
	
  return (
	<div>


];

const ProjectSnippets = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={`/projects/${project.slug}`}
              className="mt-4 inline-block text-blue-600 font-medium hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );


	</div>
  );
}
export default ProjectSnippets;