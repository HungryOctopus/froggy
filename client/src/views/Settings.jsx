import React from 'react';
import { useState, useEffect } from 'react';
import { getSettings, updateSettings } from './../services/settings.js';
import { loadAuthenticatedUser } from '../services/authentication.js';
//import api from '../services/api';

const Settings = (props) => {
  const [data, changeData] = useState({
    firstName: '',
    secondName: '',
    //imageUrl: '',
    //location: {},
    email: ''
    // passwordHashAndSalt:''
  });

  useEffect(() => {
    if (props.user) {
      changeData({
        firstName: props.user.firstName,
        secondName: props.user.secondName,
        email: props.user.email
      });
    }
  }, [props.user]);

  //   const loadUserData = {
  //   loadAuthenticatedUser()
  //   .then((user) => console.log(user)
  //   .catch((error) => {
  //     console.log(error);
  //   });
  //   }

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const { firstName, secondName, email } = data;
    try {
      const user = await updateSettings({
        firstName,
        secondName,
        email
      });
      props.onSettingsChange(user);
      props.history.push('/');
    } catch (error) {
      alert('There was an error changing user settings.');
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    changeData({ [name]: value });
  };

  return (
    <div className="container-fluid px-0 mb-5 pb-5">
      <section className="py-5 mt-5 header text-center bg-green">
        <div className="container py text-white py-5">
          <h1 className="page-section-heading text-center text-uppercase text-white">
            WELCOME, FELLOW VOLUNTEER
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
                class="bi bi-gear-wide-connected"
                viewBox="0 0 16 16"
              >
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>
            </div>
            <div className="divider-custom-line bg-white"></div>
          </div>
          <p className="masthead-subheading fs-4 text-white mb-0">
            You can change your settings here
          </p>
        </div>
      </section>

      <div>
        <h1>Change your settings</h1>
        <form onSubmit={handleFormSubmission}>
          <label htmlFor="input-firstName">First Name</label>
          <input
            id="input-firstName"
            type="text"
            placeholder="First name"
            name="firstName"
            value={data.firstName}
            onChange={handleInputChange}
          />
          <label htmlFor="input-secondName">Last Name</label>
          <input
            id="input-secondName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            type="email"
            placeholder="Your Email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          />
          <button>Change User Settings</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
