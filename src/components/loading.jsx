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

  const [modal, setModal] = useState(props.isOpen);

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
        <div className='row' style={{ padding: "10px" }}>
          <div className='col-5'>
            <h6>Huffman Tree Here</h6>
            <pre>{JSON.stringify({}, null, 2)}</pre>
          </div>
          <div className='col-7'>
            <span
              className='badge badge-warning m-1 p-2'
              style={{ minWidth: "140px" }}>
              Input File Size
            </span>{" "}
            :<span className='badge badge-primary m-1 p-2'>Primary</span>
            <br />
            <span
              className='badge badge-warning m-1 p-2'
              style={{ minWidth: "140px" }}>
              Output File Size
            </span>{" "}
            :<span className='badge badge-primary m-1 p-2'>Primary</span>
            <br />
            <span
              className='badge badge-warning m-1 p-2'
              style={{ minWidth: "140px" }}>
              Compression Ratio
            </span>
            :<span className='badge badge-primary m-1 p-2'>Primary</span>
            <br />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoadingModal;
