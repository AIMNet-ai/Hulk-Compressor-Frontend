import React from "react";
import binaryFileIcon from "./../assets/home/binary-file-icon.png";
import textFileIcon from "./../assets/home/text-file-icon.png";

function Home(props) {
  /**
   * 1 : Text Encoder
   * 0 : File Encoder
   */
  const { convert } = props;
  console.log(convert);
  return (
    <div className='row'>
      <div className='col-md-5'>
        <div className='card border-round'>
          <div className='d-flex flex-row align-items-center'>
            <h5 className='card-title p-2'>Input Text</h5>
            <img src={textFileIcon} alt='' className='right-circled' />
          </div>
          <hr className='w-75 m-auto' />
          <textarea cols='30' rows='15'></textarea>
        </div>
      </div>
      <div className='col-md-2 d-flex flex-column align-items-center justify-content-center'>
        <button className='btn btn-outline-info m-2'>Revert Selection</button>
        <button className='btn btn-outline-info m-2'>Encode/Decode</button>
        <button className='btn btn-outline-info m-2'>Draw Huffman Tree</button>
      </div>
      <div className='col-md-5'>
        <div className='card border-round'>
          <div className='d-flex flex-row align-items-center'>
            <h5 className='card-title p-2'>Output Text</h5>
            <img src={binaryFileIcon} alt='' className='right-circled' />
          </div>
          <hr className='w-75 m-auto' />
          <textarea cols='30' rows='15'></textarea>
        </div>
      </div>
    </div>
  );
}

export default Home;
