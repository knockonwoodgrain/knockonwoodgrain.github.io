import { useRef } from "react";
import { Link } from "react-router-dom";

function GalleryBox(gallery: {
  title: string;
  content: string;
  video?: boolean;
}) {
  const isMuted = useRef(true);
  return (
    <>
      <div key={gallery.title} className="galleryBox">
        <Link to={gallery.title} className="Link">
          {gallery.video ? (
            // Render video tag if format is true
            <video autoPlay muted={isMuted.current} loop className="thumbnail">
              <source src={gallery.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Render img tag if format is false
            <img className="thumbnail" src={gallery.content} alt="Thumbnail" />
          )}
          <div className="galleryText"> {gallery.title} </div>
        </Link>
      </div>
    </>
  );
}

export default GalleryBox;
