import { useState } from "react";
import PhotoDisplay from "./PhotoDisplay.tsx";

const Photographs = [
  {
    title: "Goa",
    thumbnail: "Photos/Goa.jpg",
    src: [
      "Photos/Goa/Goa001.jpg",
      "Photos/Goa/Goa002.jpg",
      "Photos/Goa/Goa003.jpg",
      "Photos/Goa/Goa004.jpg",
      "Photos/Goa/Goa005.jpg",
      "Photos/Goa/Goa006.jpg",
      "Photos/Goa/Goa007.jpg",
      "Photos/Goa/Goa008.jpg",
      "Photos/Goa/Goa009.jpg",
      "Photos/Goa/Goa0010.jpg",
      "Photos/Goa/Goa0011.jpg",
      "Photos/Goa/Goa0012.jpg",
      "Photos/Goa/Goa0013.jpg",
      "Photos/Goa/Goa0014.jpg",
      "Photos/Goa/Goa0015.jpg",
    ],
    categories: [
      "15th May 2024",
      "Trip"
    ]
  },
  {
    title: "Goa Blue",
    thumbnail: "Photos/Goa Blue.jpg",
    src: [
      "Photos/Goa/Goa Blue001.jpg",
      "Photos/Goa/Goa Blue002.jpg",
      "Photos/Goa/Goa Blue003.jpg",
      "Photos/Goa/Goa Blue004.jpg",
      "Photos/Goa/Goa Blue005.jpg",
      "Photos/Goa/Goa Blue006.jpg",
    ],
    categories: [
      "16th May 2024",
      "Trip"
    ]
  },
  {
    title: "Bejeweled",
    thumbnail: "Photos/Bejeweled.jpg",
    src: [
      "Photos/Bejeweled/Bejeweled001.JPG",
      "Photos/Bejeweled/Bejeweled002.JPG",
      "Photos/Bejeweled/Bejeweled003.JPG",
      "Photos/Bejeweled/Bejeweled004.JPG",
      "Photos/Bejeweled/Bejeweled005.JPG",
      "Photos/Bejeweled/Bejeweled006.JPG",
      "Photos/Bejeweled/Bejeweled007.JPG",
      "Photos/Bejeweled/Bejeweled008.JPG",
      "Photos/Bejeweled/Bejeweled009.JPG",
      "Photos/Bejeweled/Bejeweled0010.JPG",
      "Photos/Bejeweled/Bejeweled0011.JPG",
      "Photos/Bejeweled/Bejeweled0012.JPG",
      "Photos/Bejeweled/Bejeweled0013.JPG",
    ],
    categories: [
      "8th August 2024",
      "Shoot"
    ]
  },
  {
    title: "Camp",
    thumbnail: "Photos/Camp.jpg",
    src: [
      "Photos/Camp/Camp001.JPG",
      "Photos/Camp/Camp002.JPG",
      "Photos/Camp/Camp003.JPG",
      "Photos/Camp/Camp004.JPG",
      "Photos/Camp/Camp005.JPG",
      "Photos/Camp/Camp006.JPG",
      "Photos/Camp/Camp007.JPG",
      "Photos/Camp/Camp008.JPG",
      "Photos/Camp/Camp009.JPG",
      "Photos/Camp/Camp0010.JPG",
      "Photos/Camp/Camp0011.JPG",
      "Photos/Camp/Camp0012.JPG",
      "Photos/Camp/Camp0013.JPG",
      "Photos/Camp/Camp0014.JPG",
      "Photos/Camp/Camp0015.JPG",
      "Photos/Camp/Camp0016.JPG",
    ],
    categories: [
      "14th Dec 2024",
      "Walk"
    ]
  },
  {
    title: "Loose Bandage",
    thumbnail: "Photos/Swig Loose Bandage.jpg",
    src: [
      "Photos/Swig Loose Bandage/Swig Loose Bandage001.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage002.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage003.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage014.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage004.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage015.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage005.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage013.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage006.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage007.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage008.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage009.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage010.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage011.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage012.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage016.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage017.JPG",
      "Photos/Swig Loose Bandage/Swig Loose Bandage018.JPG",
    ],
    categories: [
      "27th August 2024",
      "Shoot"
    ]
  },
  {
    title: "Twenty Years",
    thumbnail: "Photos/Twenty Years.jpg",
    src: [
      "Photos/Twenty Years/Twenty Years001.jpg",
      "Photos/Twenty Years/Twenty Years002.jpg",
      "Photos/Twenty Years/Twenty Years003.jpg",
      "Photos/Twenty Years/Twenty Years004.jpg",
      "Photos/Twenty Years/Twenty Years005.jpg",
      "Photos/Twenty Years/Twenty Years006.jpg",
    ],
    categories: [
      "28th Dec 2024",
      "Birthday"
    ]
  },
  {
    title: "Sufi Nite",
    thumbnail: "Photos/Sufi Nite.jpg",
    src: [
      "Photos/SufiNite/Sufi Nite001.jpg",
      "Photos/SufiNite/Sufi Nite002.jpg",
      "Photos/SufiNite/Sufi Nite003.jpg",
      "Photos/SufiNite/Sufi Nite004.jpg",
      "Photos/SufiNite/Sufi Nite005.jpg",
      "Photos/SufiNite/Sufi Nite006.jpg",
      "Photos/SufiNite/Sufi Nite007.jpg",
      "Photos/SufiNite/Sufi Nite008.jpg",
      "Photos/SufiNite/Sufi Nite009.jpg",
      "Photos/SufiNite/Sufi Nite0010.jpg",
    ],
    categories: [
      "16th May 2024",
      "Trip"
    ]
  },
  {
    title: "Shot On Film",
    thumbnail: "Photos/Film.jpg",
    src: [
      "Photos/Film/Film001.JPG",
      "Photos/Film/Film002.JPG",
      "Photos/Film/Film003.JPG",
      "Photos/Film/Film004.JPG",
      "Photos/Film/Film005.JPG",
      "Photos/Film/Film006.JPG",
      "Photos/Film/Film007.JPG",
      "Photos/Film/Film008.JPG",
      "Photos/Film/Film009.JPG",
      "Photos/Film/Film0010.JPG",
      "Photos/Film/Film0011.JPG",
      "Photos/Film/Film0012.JPG",
      "Photos/Film/Film0013.JPG",
      "Photos/Film/Film0014.JPG",
      "Photos/Film/Film0015.JPG",
      "Photos/Film/Film0016.JPG",
      "Photos/Film/Film0017.JPG",
      "Photos/Film/Film0018.JPG",
    ],
    categories: [
      "2nd August 2024",
      "Trip"
    ]
  }
];

function IndexPhotography() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the currentIndex when a thumbnail is clicked
  const handleThumbnailClick = (index: number) => {
    console.log("Current Index is: ", currentIndex);
    setCurrentIndex(index);
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
