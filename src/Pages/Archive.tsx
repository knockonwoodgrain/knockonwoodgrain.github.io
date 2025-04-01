import ProjectBox from "../Gallery/ProjectBox";
import BGVideo from "../Video";

const ArchiveGroups = [
  {
    title: "Abhik BDay Posters",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Gift"],
  },
  {
    title: "Sluggist Lazy Stupid Unconcerned",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster", "Exploration"],
  },
  {
    title: "The Grand Budapest Hotel",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster"],
  },
  {
    title: "YDKUYK",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster", "Thumbnail"],
  },
  {
    title: "Upnah: Branding",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Assignment", "Branding"],
  },
  {
    title: "JW Refreshing Mixer",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster"],
  },
  {
    title: "Mouse Buddy",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Illustration", "Gift"],
  },
  {
    title: "Sultan",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Illustration"],
  },
  {
    title: "GTA Cheats",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster"],
  },
  {
    title: "Optikal Asylum Gathering",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster", "Freelance"],
  },
  {
    title: "Photobashing",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Poster", "Exploration"],
  },
  {
    title: "RUN",
    thumbnail: "Thumbnail/VDK.webp",
    categories: ["Video"],
  },
  {
    title: "GAMMA Internship",
    thumbnail: "Thumbnail/VDK.webp",
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
