import ProjectBox from "../Gallery/ProjectBox";
import BGVideo from "../Video";

const ArchiveGroups = [
  {
    title: "Abhik BDay Posters",
    content: "Thumbnail/VDK.webp",
    categories: ["Gift"],
  },
  {
    title: "Sluggist Lazy Stupid Unconcerned",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster", "Exploration"],
  },
  {
    title: "The Grand Budapest Hotel",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster"],
  },
  {
    title: "YDKUYK",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster", "Thumbnail"],
  },
  {
    title: "Upnah: Branding",
    content: "Thumbnail/VDK.webp",
    categories: ["Assignment", "Branding"],
  },
  {
    title: "JW Refreshing Mixer",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster"],
  },
  {
    title: "Mouse Buddy",
    content: "Thumbnail/VDK.webp",
    categories: ["Illustration", "Gift"],
  },
  {
    title: "Sultan",
    content: "Thumbnail/VDK.webp",
    categories: ["Illustration"],
  },
  {
    title: "GTA Cheats",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster"],
  },
  {
    title: "Optikal Asylum Gathering",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster", "Freelance"],
  },
  {
    title: "Photobashing",
    content: "Thumbnail/VDK.webp",
    categories: ["Poster", "Exploration"],
  },
  {
    title: "RUN",
    content: "Thumbnail/VDK.webp",
    categories: ["Video"],
  },
  {
    title: "GAMMA Internship",
    content: "Thumbnail/VDK.webp",
    categories: ["Zine"],
  },
];

function ArchiveSelect() {
  return (
    <>
      <div className="ProjectTitle">Archive</div>
      <div className="Projects">
        {ArchiveGroups.map((project) => (
          <ProjectBox
            key={project.title} // Adding a unique key using the index
            {...project}
          />
        ))}
      </div>
      <div className="space" />
      <BGVideo />
    </>
  );
}

export default ArchiveSelect;
