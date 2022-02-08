import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import './footer.css';
// import '../../App.css';

const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/"
          className="github foot"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/"
          className="linkedin foot"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/"
          className="instagram foot"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:info@teqmatta.com"
          className="email foot"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/"
          className="twitter foot"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>

      <div className="foot copyright">
        <p>
          <FontAwesomeIcon icon={faCopyright} size="1x" /> Figs of Eden 2021 -
          &nbsp;
          {today.getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
