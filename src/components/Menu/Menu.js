import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = ({ datas, clickEvent, slideShow }) => {
  return (
    <div className="Menu">
      <h1 className="title">
        <span className="logo"></span>
      </h1>
      <div className="action" onClick={clickEvent}>
        <Link to={slideShow ? `/galleria/${datas[0].urlPath}` : "/galleria/"}>
          <span className="link-primary">
            {slideShow ? "Show slideshow" : "Stop slideshow"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
