import ProjectBox from "./ProjectBox";

const projects = [
  {
    title: "VDK HBPT RUX",
    image: "Thumbnail/VDK.webp",
    categories: ["Zine", "Experimental", "Writing"],
  },
  {
    title: "Mindset",
    image: "Thumbnail/SDP.jpg",
    categories: ["Zine", "Design Project"],
  },
  {
    title: "Spectrum",
    image: "Thumbnail/Spectrum.jpg",
    categories: ["Zine", "Experimental", "Writing"],
  },
  {
    title: "IGOR",
    image: "Thumbnail/IGOR.jpg",
    categories: ["Zine", "Tribute"],
  },
  {
    title: "CFG Branding",
    image: "Thumbnail/CFG.jpg",
    categories: ["Branding", "Illustration"],
  },
  {
    title: "Postember",
    image: "Thumbnail/Postember.jpg",
    categories: ["Posters"],
  },
  {
    title: "Untitled",
    image: "Thumbnail/Untitled.webp",
    categories: ["Posters", "Experimental", "Writing"],
  },

  {
    title: "UX Portfolio",
    image: "Thumbnail/Website.jpg",
    categories: ["UX", "Website"],
  },
];
function Projects() {
  return (
    <>
      <div className="ProjectTitle">Projects</div>
      <div className="Projects">
        {projects.map((project) => (
          <ProjectBox
            key={project.title} // Adding a unique key using the index
            {...project}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
