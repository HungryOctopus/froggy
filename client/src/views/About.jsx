import { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container-fluid about-container">
        <div className="row mt-5">
          <div className="col about-col col-12 col-md-4">
            <div className="card about-card d-flex">
              <a
                href="https://github.com/HungryOctopus"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="about-avatar">
                  <img src="./images/avatars/amelie.png" alt="Amélie" />
                </div>
                <div className="about-name">Amélie</div>
              </a>
            </div>
          </div>
          <div className="col about-col col-12 col-md-4">
            <div className="card about-card">
              <a
                href="https://github.com/jamiemn86"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="about-avatar">
                  <img src="./images/avatars/jamie.png" alt="Jamie" />
                </div>
                <div className="about-name">Jamie</div>
              </a>
            </div>
          </div>
          <div className="col about-col col-12 col-md-4">
            <div className="card about-card">
              <a
                href="https://github.com/Senimtra"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="about-avatar">
                  <img src="./images/avatars/gregor.png" alt="Gregor" />
                </div>
                <div className="about-name">Gregor</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
