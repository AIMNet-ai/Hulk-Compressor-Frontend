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
      <div className='row' style={{ padding: "45px" }}>
        <div className='col-7' style={{ padding: "35px 10px" }}>
          <h4>
            <span className='p-1 badge badge-primary'>Project Title</span>Image
            and Text compression and encryption using hybrid approach
          </h4>
          <p className='py-2'>
            <span className='p-1 badge badge-primary'>Project Decription</span>{" "}
            A data compression algorithm is to be developed which consumes less
            time while provides more compression ratio as compared to existing
            techniques. We represent a hybrid approach to compress the text
            data. This hybrid approach is combination of Dynamic Bit reduction
            method and Huffman coding.
          </p>
          <Link className='btn btn-warning' style={{ borderRadius: "50vh" }}>
            How it Works...
          </Link>
        </div>
        <div className='col-4'>
          <table className='table'>
            <tr>
              <td>
                <img
                  src={Jayesh}
                  alt=''
                  style={{
                    borderRadius: "50vh",
                    width: "100%",
                    margin: "auto",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </td>
              <td>
                <img
                  src={Dhannashri}
                  alt=''
                  style={{
                    borderRadius: "50vh",
                    width: "100%",
                    margin: "auto",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={Mayank}
                  alt=''
                  style={{
                    borderRadius: "50vh",
                    width: "100%",
                    margin: "auto",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </td>
              <td>
                <img
                  src={Deepak}
                  alt=''
                  style={{
                    borderRadius: "50vh",
                    width: "100%",
                    margin: "auto",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default About;
