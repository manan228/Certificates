import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <BrowserRouter>
      <div className="navbar bg-base-300 sticky top-0 z-50">
        <div className="flex-1">
          <Link
            to="#specilization"
            smooth
            className="btn btn-ghost normal-case text-xl"
          >
            Manan Certificate's
          </Link>
        </div>
        {/* <div className="flex-none"> */}
          {/* <ul className="menu menu-horizontal px-1"> */}
            {/* <li>
              <Link to="#frontend" smooth>
                META Front-end Professional Certification
              </Link>
            </li>
            <li>
              <Link to="#backend" smooth>
                META Back-end Professional Certification
              </Link>
            </li>
            <li>
              <Link to="#coursera" smooth>
                Coursera Certificate's
              </Link>
            </li>
            <li>
              <Link to="#udemy" smooth>
                Udemy Certificate's
              </Link>
            </li>
            <li>
              <Link to="#misc" smooth>
                Renowed Certificate's
              </Link>
            </li> */}
          {/* </ul> */}
        {/* </div> */}
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
