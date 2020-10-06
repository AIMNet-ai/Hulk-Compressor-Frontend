import React from "react";
import { Link } from "react-router-dom";

import Jayesh from "./../assets/team/jayesh-shelar.jpg";
import Dhannashri from "./../assets/team/dhannashri-bhandari.jpg";
import Mayank from "./../assets/team/mayank-pachpande.jpg";
import Deepak from "./../assets/team/deepak-ghatole.jpg";

function About() {
  return (
    <div
      className='container'
      style={{
        borderRadius: "10px",
        border: "1px solid black",
        boxShadow: "5px 5px 5px black",
      }}>
      <div className='row' style={{ padding: "25px" }}>
        <div className='col-7' style={{ padding: "25px 10px" }}>
          <h4>
            <span className='green-underline'>Project Title </span>Image and
            Text compression and encryption using hybrid approach
          </h4>
          <p className='py-2'>
            <span className='green-underline'>Project Decription</span> A data
            compression algorithm is to be developed which consumes less time
            while provides more compression ratio as compared to existing
            techniques. We represent a hybrid approach to compress the text
            data. This hybrid approach is combination of Dynamic Bit reduction
            method and Huffman coding.
          </p>

          <ul className='list-group'>
            <li className='list-group-item d-flex flex-row'>
              Jayesh Shelar
              <span className='badge badge-primary p-1 ml-auto'>
                TECOB254
              </span>{" "}
            </li>
            <li className='list-group-item d-flex flex-row'>
              Dhanashree Bhandari{" "}
              <span className='badge badge-primary p-1 ml-auto'>TECOB203</span>
            </li>
            <li className='list-group-item d-flex flex-row'>
              Mayank Pachpande{" "}
              <span className='badge badge-primary p-1 ml-auto'> TECOB230</span>
            </li>
            <li className='list-group-item d-flex flex-row'>
              Dipak Ghatole{" "}
              <span className='badge badge-primary p-1 ml-auto'>TECOB206</span>
            </li>
          </ul>
          {/*
          <Link
            className='btn btn-warning m-2'
            style={{ borderRadius: "50vh" }}>
            How it Works...
          </Link>
          */}
        </div>
        <div className='col-4'>
          <table className='table'>
            <tr>
              <td>
                <img src={Jayesh} alt='' className='team-members' />
              </td>
              <td>
                <img src={Dhannashri} alt='' className='team-members' />
              </td>
            </tr>
            <tr>
              <td>
                <img src={Mayank} alt='' className='team-members' />
              </td>
              <td>
                <img src={Deepak} alt='' className='team-members' />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
