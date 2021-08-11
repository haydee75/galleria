import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className="Modal">
      <div className="wrapper">
        <div className="close-modal">
          <span onClick={props.closeModal}>close</span>
        </div>
        <img src={props.largeImage} alt={props.altProp} />
      </div>
    </div>
  );
};

export default Modal;
