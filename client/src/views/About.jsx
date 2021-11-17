import { Component } from 'react';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <header className="masthead bg-primary text-white text-center mt-5 pt-5">
          <div className="container d-flex align-items-center flex-column">
            <div className="card about-card">
              <div className="avatar">
                <img src="./images/avatars/amelie.png" alt="amelie" />
              </div>
              <div className="info-box">
                <div>Amelie</div>
              </div>
            </div>
            <div className="card about-card">
              <div className="avatar">
                <img src="./images/avatars/jamie.png" alt="jamie" />
              </div>
              <div className="info-box">
                <div>Jamie</div>
              </div>
            </div>
            <div className="card about-card">
              <div className="avatar">
                <img src="./images/avatars/gregor.jpg" alt="gregor" />
              </div>
              <div className="info-box">
                <div>Gregor</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default About;
