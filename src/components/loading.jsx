import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";

const LoadingModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className='d-flex justify-content-center align-items-center'
        style={{ height: "80vh" }}>
        <Spinner style={{ width: "5rem", height: "5rem", margin: "auto" }} />
      </Modal>
    </div>
  );
};

export default LoadingModal;
