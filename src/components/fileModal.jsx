import React, { useState } from "react";
import { Button, Modal } from "reactstrap";

const FileModal = (props) => {
  const { data, toggler } = props;
  const [ipOpen, setipOpen] = useState(props.isOpen);
  const toggle = () => {
    setipOpen(!ipOpen);
    toggler(!ipOpen);
  };

  return (
    <div>
      <Modal
        isOpen={ipOpen}
        toggle={toggle}
        className='d-flex justify-content-center align-items-center'
        style={{ height: "80vh" }}>
        <Button color='danger' onClick={toggle}>
          Close
        </Button>
        <div
          className='row justify-content-center align-items-center'
          style={{ padding: "10px" }}>
          <div className='col-5 justify-content-center align-items-center'>
            <a
              className='btn btn-primary m-1 p-3'
              href={`http://localhost:5000/decoded/${data.id}`}>
              Download Input File
            </a>
            <br />
            <a
              className='btn btn-primary m-1 p-3'
              href={`http://localhost:5000/encoded-compressed/${data.id}`}>
              Download Output File
            </a>
            <br />
          </div>
          <div className='col-7 justify-content-center align-items-center'>
            <span
              className='badge badge-warning m-1 p-2'
              style={{ minWidth: "140px" }}>
              Input File Size
            </span>{" "}
            :
            <span className='badge badge-primary m-1 p-2'>{`${data.inputSize} bytes`}</span>
            <br />
            <span
              className='badge badge-warning m-1 p-2'
              style={{ minWidth: "140px" }}>
              Output File Size
            </span>{" "}
            :
            <span className='badge badge-primary m-1 p-2'>{`${data.outputSize} bytes`}</span>
            <br />
            <span
              className='badge badge-warning m-1 p-2'
              style={{ minWidth: "140px" }}>
              Compression Ratio
            </span>
            :
            <span className='badge badge-primary m-1 p-2'>
              {data.compressionRatio}
            </span>
            <br />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FileModal;
