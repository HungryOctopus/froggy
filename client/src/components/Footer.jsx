import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer" className="footer text-center bg-orange fixed-bottom">
      {/* <div class="container"> */}
      <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <Link to="/contact" className="footer-link text-uppercase">
            <h4 className="text-uppercase mb-4">Contact</h4>
            <div className="icon-contact mt-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="#edece9"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="col-lg-4 mb-5 mb-lg-0">
          <Link to="/about" className="footer-link text-uppercase">
            <h4 className="text-uppercase mb-4">About us</h4>
            <div className="icon-contact mt-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                fill="#edece9"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
