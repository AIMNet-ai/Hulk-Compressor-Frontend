import React, { useState, useEffect } from "react";
import { Button, Modal } from "reactstrap";
import hulkLoading from "./../assets/hulk-loading.gif";

const TextModal = (props) => {
  const { data, setmodalshow } = props;
  const loadingTime = Math.random() * 3000;
  const [loading, setloading] = useState(true);
  const [ipOpen, setipOpen] = useState(props.isOpen);
  const toggle = () => {
    setipOpen(!ipOpen);
    setmodalshow(!ipOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, loadingTime);
  }, []);

  return (
    <div>
      <Modal
        isOpen={ipOpen}
        toggle={toggle}
        className='d-flex justify-content-center align-items-center'
        style={{ height: "80vh" }}>
        {loading ? (
          <img src={hulkLoading} className='w-100' />
        ) : (
          <>
            <Button color='danger' onClick={toggle}>
              Close
            </Button>
            <div
              className='row justify-content-center align-items-center'
              style={{ padding: "10px" }}>
              <div className='col-4'>
                <h6>Huffman Tree Here</h6>
                <pre>{JSON.stringify(data.tree, null, 2)}</pre>
              </div>
              <div className='col-8 justify-content-center align-items-center'>
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
          </>
        )}
      </Modal>
    </div>
  );
};

export default TextModal;
