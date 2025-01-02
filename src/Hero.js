import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './Hero.css';
import container from './images/Container.jpg';
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import logo3 from './images/logo3.png';
import logo4 from './images/logo4.png';
import logo5 from './images/logo5.png';
import logo6 from './images/logo6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const ListItem = ({ logo, text }) => (
  <li>
    <Image src={logo} alt={text} fluid />
    <h1>{text}</h1>
  </li>
);

const Hero = () => {
  const logos = [
    { src: logo1, text: 'Boltshift' },
    { src: logo2, text: 'Lightbox' },
    { src: logo3, text: 'FeatherDev' },
    { src: logo4, text: 'Spherule' },
    { src: logo5, text: 'GlobalBank' },
    { src: logo6, text: 'Nietzche' },
  ];

  return (
    <Container>
      <div className="contain">
        <div className="toggle">
          <a href="http://">
            <span id="link">New feature</span> Check out the team dashboard <span> <FontAwesomeIcon icon={faArrowRightLong} size="lg" style={{ color: '#bd83d2' }} /></span>
          </a>
        </div>
        <div className="title">
          <h1>Beautiful analytics to grow smarter</h1>
        </div>
        <div className="para">
          <p>
            Powerful, self-serve product and growth analytics to help you convert, engage, <br />
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        <div className="d-flex gap-2 mb-2 button">
          <button id='btn-1'>
          <span>
            <FontAwesomeIcon icon={faCirclePlay} />
          </span> Demo</button>
          <button id="btn-2">Sign up</button>
        </div>
        <Image src={container} id="img" fluid />
        <p id="img-para">Join 4,000+ companies already growing</p>

        <ul className="list">
          {logos.map((logo, index) => (
            <ListItem key={index} logo={logo.src} text={logo.text} />
          ))}
        </ul>

        <div id="line-break"></div>
      </div>
    </Container>
  );
};

export default Hero;
