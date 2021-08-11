import "./Gallery.scss";
import { Link } from "react-router-dom";

const Gallery = ({ datas, clickEvent }) => {
  return (
    <div className="Gallery">
      {datas.map((data, index) => {
        return (
          <div key={index} className="thumbnail">
            <Link to={"/" + data.urlPath} onClick={clickEvent}>
              <img
                className="image"
                src={data.images.thumbnail}
                alt={data.images.name}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
