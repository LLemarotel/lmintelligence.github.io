import React from 'react'

const OurWork = () => {
  const projects = [
    {
      title: "Le Goût Divin",
      description: "Site vitrine pour un restaurant gastronomique.",
      mockup: "/caroussel restaurant.mp4",
      preview: "/caroussel restaurant.mp4",
      link: "https://lmintelligence.fr/maquettes/restaurant/",
      mediaType: "video"
    },
    {
      title: "Climacool",
      description: "Site statique pour un artisan climatiseur.",
      mockup: "/Free Hand Mockup.png",
      preview: "/climacool-front.png",
      link: "https://lmintelligence.fr/maquettes/clim/"
    },
    {
      title: "Pizza Che Vuoi",
      description: "Site vitrine pour un artisan pizzaiolo italien.",
      mockup: "/mockuppizza.jpg",
      preview: "/pizzachevuoi-front.png",
      link: "https://lmintelligence.fr/maquettes/pizza/"
    },
    {
      title: "Express Vitre",
      description: "Site vitrine pour une entreprise de fabrication de vitres et miroirs sur mesure.",
      mockup: "/mockup_miroir.png",
      preview: "/miroir-front.png",
      link: "https://lmintelligence.fr/maquettes/miroir/"
    },
    {
      title: "Serrurier Cannes",
      description: "Site web pour un artisan serrurier à Cannes.",
      mockup: "/mockup_serurier.png",
      preview: "/serurier-front.png",
      link: "https://lmintelligence.fr/maquettes/serrurier/"
    }
  ]

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="our-work" className="py-20 bg-white overflow-hidden">
      {/* Header with constrained width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre portefeuille de sites web et de pages de destination percutants.
          </p>
        </div>
      </div>

      {/* Full-width carousel */}
      <div className="relative carousel-container">
        <div className="carousel-track">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg text-left flex-shrink-0 carousel-item bg-white"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden">
                  {project.mediaType === "video" ? (
                    <video
                      src={project.mockup}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      loop
                      muted
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.mockup}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                  )}
                  {project.mediaType === "video" ? (
                    <video
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      loop
                      muted
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.preview}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )
                  }
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-center px-4 text-sm">
                      Cliquez pour voir la réalisation
                    </span>
                  </div>
                </div>
              </a>
              <div className="carousel-caption">
                <h3 className="carousel-title">{project.title}</h3>
                <p className="carousel-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWork