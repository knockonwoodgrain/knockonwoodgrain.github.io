import { useState } from "react";
import Film from "./Film.tsx";

const Videos = [
  {
    title: "Goa 2025",
    src: "https://storage.googleapis.com/knockonwoodgrain/Goa%202025%20AV1.MP4",
    thumbnail: "/Cinematography/Goa 2025 AV1.jpg",
  },
  {
    title: "Mumbai 2025",
    src: "https://storage.googleapis.com/knockonwoodgrain/Mumbai%202025%20AV1.mp4",
    thumbnail: "/Cinematography/Trailer AV1.jpg",
  },
  {
    title: "Night Life",
    src: "https://storage.googleapis.com/knockonwoodgrain/Night%20Life%20AV1.mp4",
    thumbnail: "/Cinematography/Night Life AV1.jpg",
  },
  {
    title: "Hazy Day",
    src: "/Cinematography/Hazy Day AV1.mp4",
    thumbnail: "/Cinematography/Hazy Day AV1.jpg",
  },
  {
    title: "Decayed Hermit",
    src: "https://storage.googleapis.com/knockonwoodgrain/FCP%20AV1.mp4",
    thumbnail: "/Cinematography/FCP AV1.jpg",
  },
  {
    title: "Valentines Day",
    src: "https://storage.googleapis.com/knockonwoodgrain/Valentines%20AV1.mp4",
    thumbnail: "/Cinematography/Valentines AV1.jpg",
  }
];

function Cinematography() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the currentIndex when a thumbnail is clicked
  const handleThumbnailClick = (index: number) => {
    console.log("Current Index is: ", currentIndex);
    setCurrentIndex(index);
  };
  return (
    <>
    <div className="ProjectTitle">Cinematography</div>
      {/* Pass the current selected video to the Film component */}
      <Film key={Videos[currentIndex].src} videodata={Videos[currentIndex]} />
      <div className="FilmGrid">
        {Videos.map((video, index) => (
          <div
            key={video.title}
            className="FilmContainer"
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="thumbnail"
            />
            <div className="FilmTitle">{video.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}



export default Cinematography;
