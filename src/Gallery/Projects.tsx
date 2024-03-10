import ProjectBox from "./ProjectBox";

const designs = [
  {
    title: "Mindset",
    image: "Thumbnail/SDP.jpg",
    categories: ["Zine", "Design Project"],
  },
  {
    title: "CFG Branding",
    image: "Thumbnail/CFG.jpg",
    categories: ["Branding", "Illustration"],
  },
  {
    title: "UX Portfolio",
    image: "Thumbnail/Website.jpg",
    categories: ["UX", "Website"],
  },
];
const arts = [
  {
    title: "VDK HBPT RUX",
    image: "Thumbnail/VDK.webp",
    categories: ["Zine", "Experimental", "Writing"],
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
    title: "Postember",
    image: "Thumbnail/Postember.jpg",
    categories: ["Posters"],
  },
  {
    title: "Untitled",
    image: "Thumbnail/Untitled.webp",
    categories: ["Posters", "Experimental", "Writing"],
  },
];
function Projects() {
  return (
    <>
      <div className="ProjectTitle">Design</div>
      <div className="Projects">
        {designs.map((design) => (
          <ProjectBox
            key={design.title} // Adding a unique key using the index
            {...design}
          />
        ))}
      </div>
      <div className="ProjectTitle">Art</div>
      <div className="Projects">
        {arts.map((art) => (
          <ProjectBox
            key={art.title} // Adding a unique key using the index
            {...art}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
