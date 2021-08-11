import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Paint.scss";
import Modal from "../Modal/Modal";

const Paint = ({ datas }) => {
  let { urlPath } = useParams();
  const paint = datas.find((data) => data.urlPath === urlPath);

  const nextSlide = datas.indexOf(paint) + 1;
  const prevSlide = datas.indexOf(paint) - 1;

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const color1 = "#000";
  const color2 = "#ccc";

  const indexPaint = datas.indexOf(paint) + 1;
  const datasLenght = datas.length;

  const blackLineWidth = Math.round((indexPaint * 100) / datasLenght);
  const greyLineWidth = 100 - blackLineWidth;

  return (
    <div className="Paint">
      {paint ? (
        <>
          <div className="container">
            <div className="row main">
              <div
                className="main-image"
                style={{
                  backgroundImage: `url("${paint.images.hero.large}")`,
                }}
              >
                <div className="icon-view-image" onClick={handleModal}>
                  <span>View Image</span>
                </div>
              </div>
              {showModal && (
                <Modal
                  largeImage={paint.images.gallery}
                  altProp={paint.name}
                  closeModal={handleModal}
                />
              )}
              <div className="main-informations">
                <div className="info">
                  <h1>{paint.name}</h1>
                  <p>{paint.artist.name}</p>
                </div>
                <div className="img-artist">
                  <img src={paint.artist.image} alt={paint.artist.name} />
                </div>
              </div>
            </div>
            <div className="row content">
              <div className="date">
                <span>{paint.year}</span>
              </div>
              <div className="description">
                <p>{paint.description}</p>
                <a
                  className="source"
                  href={paint.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="link-secondary">Got to source</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="progress-bar"
            style={{
              backgroundImage: `linear-gradient(to right,  ${color1}, ${color1} ${blackLineWidth}%, ${color2} ${blackLineWidth}%, ${color2} ${greyLineWidth}%)`,
            }}
          ></div>
          <div className="footer">
            <div className="column">
              <h3>{paint.name}</h3>
              <div className="artist-name">
                <span>{paint.artist.name}</span>
              </div>
            </div>
            <div className="column nav-links">
              <span className="prev-btn">
                {prevSlide <= -1 ? (
                  <span className="disable"></span>
                ) : (
                  <Link className="active" to={datas[prevSlide].urlPath}></Link>
                )}
              </span>
              <span className="next-btn">
                {nextSlide >= 15 ? (
                  <span className="disable"></span>
                ) : (
                  <Link className="active" to={datas[nextSlide].urlPath}></Link>
                )}
              </span>
            </div>
          </div>
        </>
      ) : (
        <p>{urlPath} is not a planet</p>
      )}
    </div>
  );
};

export default Paint;
