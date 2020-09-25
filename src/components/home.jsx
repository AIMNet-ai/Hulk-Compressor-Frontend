import React, { useState } from "react";
import binaryFileIcon from "./../assets/home/binary-file-icon.png";
import textFileIcon from "./../assets/home/text-file-icon.png";
import LoadingModal from "./loading";
function Home(props) {
  /**
   * 1 : Text
   * 0 : File
   *
   * 1 : Encoder
   * 0 : Decoder
   */
  let { convert } = props;
  const [textOrFile, settextOrFile] = useState(convert);
  const [encoderOrDecoder, setencoderOrDecoder] = useState(1);
  const [DEC, setDEC] = useState("");
  const [ENC, setENC] = useState("");

  const checkValidBinary = (str) => {
    const arr = str.split("");
    for (let element of arr) {
      if (!(element === "0" || element === "1")) return false;
    }
    return true;
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
    setDEC("");
    setENC("");
  };

  return (
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
            <form className='w-100 d-flex flex-column align-items-center justify-content-center'>
              <img src={textFileIcon} className='m-auto p-2 w-75' alt='' />

              <div className='form-group'>
                <input
                  type='file'
                  className='form-control-file'
                  id='exampleFormControlFile1'
                />
                <small id='emailHelp' className='form-text text-muted'>
                  Only text file allowed to upload.
                </small>
              </div>
              <div className='p-1'>
                <button type='submit' className='btn btn-primary m-auto'>
                  Upload File
                </button>
              </div>
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
            Revert Selection
          </button>
        ) : (
          ""
        )}
        <button className='btn btn-outline-info m-2 middle-btn'>
          {encoderOrDecoder ? "Encode" : "Decode"}
        </button>
        {textOrFile ? (
          <button className='btn btn-outline-info m-2 middle-btn'>
            Draw Huffman Tree
          </button>
        ) : (
          ""
        )}
        {textOrFile ? (
          <button
            className='btn btn-outline-danger m-2 middle-btn'
            onClick={clearBoth}>
            Clear both
          </button>
        ) : (
          ""
        )}
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
              value={!encoderOrDecoder ? DEC : ENC}></textarea>
          ) : (
            <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
              <img src={binaryFileIcon} className='m-auto p-2 w-75' alt='' />

              <div className='form-group p-1'>
                <button type='submit' className='btn btn-primary m-auto'>
                  Download Output File
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <LoadingModal />
    </div>
  );
}

export default Home;
