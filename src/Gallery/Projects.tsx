import ProjectBox from "./ProjectBox";

const designs = [
  {
    title: "Mindset",
    content: "Thumbnail/SDP.jpg",
    categories: ["Zine", "Design Project"],
  },
  {
    title: "CFG Branding",
    content: "Thumbnail/CFG.jpg",
    categories: ["Branding", "Illustration"],
  },
  {
    title: "UX Portfolio",
    content: "Thumbnail/Website.jpg",
    categories: ["UX", "Website"],
  },
];
const arts = [
  {
    title: "VDK HBPT RUX",
    content: "Thumbnail/VDK.webp",
    categories: ["Zine", "Experimental", "Writing"],
  },
  {
    title: "Spectrum",
    content: "Thumbnail/Spectrum.jpg",
    categories: ["Zine", "Experimental", "Writing"],
  },
  {
    title: "IGOR",
    content: "Thumbnail/IGOR.jpg",
    categories: ["Zine", "Tribute"],
  },
  {
    title: "Postember",
    content: "Thumbnail/Postember.jpg",
    categories: ["Posters"],
  },
  {
    title: "Untitled",
    content: "Thumbnail/Untitled.webp",
    categories: ["Posters", "Experimental", "Writing"],
  },
];
function Projects() {
  return (
    <>
      <div className="ProjectTitle">Art</div>
      <div className="Projects">
        {arts.map((art) => (
          <ProjectBox
            key={art.title} // Adding a unique key using the index
            {...art}
          />
        ))}
      </div>
      <div className="ProjectTitle">Design</div>
      <div className="Projects">
        {designs.map((design) => (
          <ProjectBox
            key={design.title} // Adding a unique key using the index
            {...design}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
