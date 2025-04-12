import { useState } from "react";
import PhotoDisplay from "./PhotoDisplay.tsx";

const Photographs = [
  {
    title: "Goa",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa006.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa007.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa008.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa009.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0010.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0011.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0012.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0013.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0014.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa0015.webp",
    ],
    categories: [
      "15th May 2024",
      "Trip"
    ]
  },
  {
    title: "Goa Blue",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa Blue.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Goa/Goa Blue006.webp",
    ],
    categories: [
      "16th May 2024",
      "Trip"
    ]
  },
  {
    title: "Bejeweled",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled006.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled007.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled008.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled009.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Bejeweled/Bejeweled0010.webp",
    ],
    categories: [
      "8th August 2024",
      "Shoot"
    ]
  },
  {
    title: "Camp",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp006.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp007.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp008.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp009.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0010.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0011.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0012.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0013.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0014.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0015.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Camp/Camp0016.webp",
    ],
    categories: [
      "14th Dec 2024",
      "Walk"
    ]
  },
  {
    title: "Loose Bandage",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage014.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage015.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage013.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage006.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage007.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage008.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage009.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage010.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage011.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage012.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage016.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage017.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage018.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Swig Loose Bandage/Swig Loose Bandage019.webp",
    ],
    categories: [
      "27th August 2024",
      "Shoot"
    ]
  },
  {
    title: "Twenty Years",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Twenty Years/Twenty Years006.webp",
    ],
    categories: [
      "28th Dec 2024",
      "Birthday"
    ]
  },
  {
    title: "Sufi Nite",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Sufi Nite.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite006.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite007.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite008.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite009.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/SufiNite/Sufi Nite0010.webp",
    ],
    categories: [
      "16th May 2024",
      "Trip"
    ]
  },
  {
    title: "Shot On Film",
    thumbnail: "https://storage.googleapis.com/knockonwoodgrain/Photos/Film.webp",
    src: [
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film001.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film002.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film003.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film004.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film005.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film006.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film007.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film008.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film009.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0010.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0011.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0012.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0013.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0014.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0015.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0016.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0017.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0018.webp",
      "https://storage.googleapis.com/knockonwoodgrain/Photos/Film/Film0019.webp",
    ],
    categories: [
      "2nd August 2024",
      "Trip"
    ]
  }
];

function IndexPhotography() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  async function preloadImages(index: number) {
    for (const url of Photographs[index].src) {
      await new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;  // Wait for this image to load before moving to the next
      });
    }
  }

  // Change the currentIndex when a thumbnail is clicked
  const handleThumbnailClick = (index: number) => {
    console.log("Current Index is: ", currentIndex);
    setCurrentIndex(index);
    preloadImages(index);
  };
  return (
    <>
    <div className="ProjectTitle">Photography</div>
      {/* Pass the current selected photograph to the Film component */}
      <PhotoDisplay key={Photographs[currentIndex].thumbnail} photodata={Photographs[currentIndex]} />
      <div className="FilmGrid">
        {Photographs.map((photograph, index) => (
          <div
            key={photograph.title}
            className="FilmContainer"
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={photograph.thumbnail}
              alt={photograph.title}
              className="thumbnail"
            />
            <div className="FilmTitle">{photograph.title}</div>
            <div className="CategoryContainer">
            {photograph.categories.map((category, index) => (
              <div key={index} className="Category">
                {category}
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
    </>
  );
}



export default IndexPhotography;
