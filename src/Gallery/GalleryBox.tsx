import { Link } from "react-router-dom";

function GalleryBox(gallery: { title: string; image: string }) {
  return (
    <>
      <div key={gallery.title} className="galleryBox">
        <Link to={gallery.title} className="Link">
          <img className="thumbnail" src={gallery.image} />
          <div className="galleryText"> {gallery.title} </div>
        </Link>
      </div>
    </>
  );
}

export default GalleryBox;
