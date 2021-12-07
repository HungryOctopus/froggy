import { Component } from 'react';
import GoogleMapsHome from '../components/GoogleMapsHome';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/* Masthead */}
        <header className="masthead bg-white text-dark text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column mt-5 pt-5">
            {/* <!-- Masthead Avatar Image--> */}
            <img
              className="masthead-avatar mb-5"
              src="./images/froggy.png"
              alt="froggy"
            />
            {/* <!-- Masthead Heading--> */}
            <h1 className="masthead-heading text-uppercase text-green mb-0">
              REALFROGGER
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#95c60a"
                  className="bi bi-bucket-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z" />
                </svg>
              </div>
              <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Masthead Subheading--> */}
            <p className="masthead-subheading font-weight-light mb-0">
              Join our volunteer team and bring frogs and toads safe to the
              lake!
            </p>
          </div>
        </header>

        {/* LOCATION SECTION */}

        <section
          className="page-section bg-green text-white pt-3 pb-3 mb-0"
          id="location"
        >
          <div className="container-fluid p-0">
            <h1 className="page-section-heading text-center text-uppercase text-white">
              FIND US
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-white"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-white"></div>
            </div>
            <div>
              <GoogleMapsHome />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}

        <section
          id="about"
          className="page-section bg-lgrey text-white pt-3 pb-3 mb-0"
        >
          <div className="container-fluid p-0">
            {/* About section heading */}

            <h1 className="page-section-heading text-center text-uppercase text-green">
              ABOUT
            </h1>
            {/* <!-- Icon Divider--> */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line bg-green"></div>
              <div className="divider-custom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#95c60a"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="divider-custom-line bg-green"></div>
            </div>
            {/* About section content */}
            <div className="row pb-5 mb-5">
              <p className="lead text-dark text-align-center px-5 py-4">
                The nature conservation working group of the BUND regional
                association in Freiburg looks after one of the largest, still
                somewhat intact amphibian populations in southern Baden. To this
                end, volunteers erect fences on both sides of the road to keep
                the amphibians safely from the street. In the last 10 years, a
                total of 3000 to 6000 animals (common toads and grass frogs) 
                have been carried across the road every year. We need as many committed
                helpers as possible who are willing to carry amphibians across
                the road so that our region continues to have a great diversity
                of species.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
