import React, { useState } from "react";
import axios from "axios";

import binaryFileIcon from "./../assets/home/binary-file-icon.png";
import textFileIcon from "./../assets/home/text-file-icon.png";
import TextModal from "./textModal";
import FileModal from "./fileModal";

const url = "https://compress-encrypt-backend.herokuapp.com/";

function Home(props) {
  /**
   * 1 : Text
   * 0 : File
   *
   * 1 : Encoder
   * 0 : Decoder
   */
  let { convert } = props;
  const textOrFile = convert;
  const [encoderOrDecoder, setencoderOrDecoder] = useState(1);
  const [DEC, setDEC] = useState("asasssddssdsdaa");
  const [ENC, setENC] = useState("10011011110001111010");
  const [result, setresult] = useState({});
  const [modalshow, setmodalshow] = useState(false);

  const [fileToUpload, setfileToUpload] = useState("");
  const [fileData, setfileData] = useState({});
  const [fileModalBool, setfileModalBool] = useState(false);

  const onChangeFile = (e) => {
    setfileToUpload(e.target.files[0]);
  };

  const checkValidBinary = (str) => {
    const arr = str.split("");
    for (let element of arr) {
      if (!(element === "0" || element === "1")) return false;
    }
    return true;
  };

  const calculateOperation = () => {
    if (textOrFile) {
      if (encoderOrDecoder) {
        //Encoder Logic here
        console.log("Text Encoder");
        if (DEC !== "") {
          axios
            .post(`${url}api/huffman-text-encode`, {
              payload: DEC.toString(),
            })
            .then((res) => {
              console.log(res.data);
              setENC(res.data.output);
              setresult(res.data);
              setmodalshow(true);
            });
        }
      } else {
        //Decoder Logic here
        console.log("Text Decoder");

        if (ENC !== "") {
          axios
            .post(`${url}api/huffman-text-decode`, {
              payload: ENC.toString(),
            })
            .then((res) => {
              console.log(res.data);
              setDEC(res.data.output);
              setresult(res.data);
              setmodalshow(true);
            });
        }
      }
    } else {
      console.log("file encoder logic");
      const fileUpload = (file) => {
        const urlX = "${url}api/upload-normal-file";
        const formData = new FormData();
        formData.append("file", file);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        return axios.post(urlX, formData, config);
      };
      fileUpload(fileToUpload).then((response) => {
        console.log(response.data);
        setfileData(response.data);
        setfileModalBool(true);
      });
    }
  };

  const seeHuffmanTree = () => {
    setmodalshow(true);
  };

  const onChangeText = (e) => {
    if (encoderOrDecoder) {
      if (e.target.name === "DEC") setDEC(e.target.value);
      else {
        if (checkValidBinary(e.target.value)) setENC(e.target.value);
      }
    } else {
      if (e.target.name === "ENC") setDEC(e.target.value);
      else {
        if (checkValidBinary(e.target.value)) setENC(e.target.value);
      }
    }
    //console.log(DEC, ENC);
  };

  const clearBoth = () => {
    if (textOrFile) {
      setDEC("");
      setENC("");
    } else {
      setfileData({});
      setfileToUpload("");
      setfileModalBool(false);
    }
  };

  const FormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='row p-3'>
        <div className='col-md-5'>
          <div className='card border-round'>
            <div className='d-flex flex-row align-items-center'>
              <div className='d-flex flex-column p-2'>
                <h5 className='text-bold'>Input Text</h5>
                <small>
                  {encoderOrDecoder
                    ? "(Simple Plain English Text)"
                    : "(Huffman Endoded Binary Text)"}
                </small>
              </div>

              <img
                src={encoderOrDecoder ? textFileIcon : binaryFileIcon}
                alt=''
                className='right-circled'
              />
            </div>
            <hr className='w-75 m-auto' />
            {textOrFile ? (
              <textarea
                cols='30'
                rows='15'
                name='DEC'
                onChange={onChangeText}
                value={encoderOrDecoder ? DEC : ENC}></textarea>
            ) : (
              <form
                className='w-100 d-flex flex-column align-items-center justify-content-center'
                onSubmit={FormSubmit}>
                <img
                  src={textFileIcon}
                  className='m-auto p-2 form-img'
                  alt=''
                />

                <div className='form-group'>
                  <input
                    type='file'
                    name='file'
                    className='form-control-file'
                    id='exampleFormControlFile1'
                    onChange={onChangeFile}
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    Only text file allowed to upload.
                  </small>
                </div>

                {/*
                <button type='submit' className='btn btn-primary m-auto'>
                  Upload File
</button>*/}
              </form>
            )}
          </div>
        </div>
        <div className='col-md-2 d-flex flex-column align-items-center justify-content-center'>
          {textOrFile ? (
            <button
              className='btn btn-outline-info m-2 middle-btn'
              onClick={() => {
                let next = encoderOrDecoder === 1 ? 0 : 1;
                setencoderOrDecoder(next);
              }}>
              <i className='fas fa-recycle' style={{ fontSize: "20px" }}></i>
              <br />
              Revert Selection
            </button>
          ) : (
            ""
          )}
          <button
            className='btn btn-outline-success m-2 middle-btn'
            onClick={calculateOperation}>
            {encoderOrDecoder ? "Encode" : "Decode"}
          </button>
          {textOrFile ? (
            <button
              className='btn btn-outline-info m-2 middle-btn'
              onClick={seeHuffmanTree}>
              <i className='fas fa-poll-h' style={{ fontSize: "20px" }}></i>
              <br />
              See Huffman Tree
            </button>
          ) : (
            ""
          )}

          <button
            className='btn btn-outline-danger m-2 middle-btn'
            onClick={clearBoth}>
            <i className='fas fa-trash-alt ' style={{ fontSize: "20px" }}></i>{" "}
            Clear both
          </button>
        </div>
        <div className='col-md-5'>
          <div className='card border-round'>
            <div className='d-flex flex-row align-items-center'>
              <div className='d-flex flex-column p-2'>
                <h5 className='text-bold'>Output Text</h5>
                <small>
                  {!encoderOrDecoder
                    ? "(Simple Plain English Text)"
                    : "(Huffman Endoded Binary Text)"}
                </small>
              </div>
              <img
                src={encoderOrDecoder ? binaryFileIcon : textFileIcon}
                alt=''
                className='right-circled'
              />
            </div>
            <hr className='w-75 m-auto' />
            {textOrFile ? (
              <textarea
                cols='30'
                rows='15'
                name='ENC'
                onChange={onChangeText}
                disabled
                value={!encoderOrDecoder ? DEC : ENC}></textarea>
            ) : (
              <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
                <img
                  src={binaryFileIcon}
                  className='m-auto p-2 form-img'
                  alt=''
                />
                {fileData.id ? (
                  <>
                    <span className='badge badge-info p-1'>
                      Output File Size : {`${fileData.outputSize} bytes`}
                    </span>
                    <span className='badge badge-info p-1'>
                      name : {`${fileData.id}.bin`}
                    </span>
                    <div className='form-group p-1'>
                      <a
                        className='btn btn-primary m-auto'
                        href={`${url}encoded-compressed/${fileData.id}`}>
                        Download Output File
                      </a>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
        {modalshow ? (
          <TextModal
            isOpen={modalshow}
            data={result}
            setmodalshow={setmodalshow}
          />
        ) : (
          ""
        )}
        {fileModalBool ? (
          <FileModal
            isOpen={fileModalBool}
            toggler={setfileModalBool}
            data={fileData}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
