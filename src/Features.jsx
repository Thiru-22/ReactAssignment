import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import logo7 from './images/logo7.png';
import person1 from './images/person1.png';
import content from './images/Content.png'
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';



const ListItem = ({ logo, head, para,showLink,link }) => (
  <Col md={4} className="mb-4">
    <div className="list-item">
      <Image src={logo} fluid className="icon" />
      <h1 className="list-head">{head}</h1>
      <p className="list-para">{para}</p>
      {showLink && link && (
        <a href={link} className="link">Learn More <span> <FontAwesomeIcon icon={faArrowRightLong} size="lg" style={{ color: '#8b36b5' }} /></span></a>
      )}
    </div>
  </Col>
);

const Features = () => {
  const logos = [
    {
      src: icon1,
      head: 'Share team inboxes',
      para: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
      link:'Learn more',
    },
    {
      src: icon2,
      head: 'Deliver instant answers',
      para: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
      link:'Learn more',
    },
    {
      src: icon3,
      head: 'Manage your team with reports',
      para: 'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
      link:'Learn more',
    },
    {
      src: icon4,
      head: 'Connect with customers',
      para: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
      src: icon5,
      head: 'Connect the tools you already use',
      para: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
      src: icon6,
      head: 'Our people make the difference',
      para: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
  ];

  return (
    <div>
      <Container>
        <div className="contain">
          <span className="feature">Features</span>
          <h1 id='c-heading'>Analytics that feels like it's from the future</h1>
          <p id='c-para'>
            Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more users. Trusted by over 4,000 startups.
          </p>
          <Row>
            {logos.map((logo, index) => (
              <ListItem
                key={index}
                logo={logo.src}
                head={logo.head}
                para={logo.para}
              />
            ))}
          </Row>
        </div>
      </Container>
        
      <div className="part2">
          <h3><span><Image src={logo7} className="p-icon" /></span>{' '}Sisyphus
          </h3>
          <h1>
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </h1>
          <Image src={person1} fluid className="person" />
          <h6>Candice Wu</h6>
          <p>Product Manager, Sisyphus</p>
      </div>
      <Container>
          <div className="part3">
            <span>Features</span>
            <h1 id="c-heading">Cutting-edge features for advanced analytics</h1>
            <p id="c-para"> Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more users. Trusted by over 4,000 startups.</p>
            <Image src={content} fluid className='img'/>
          </div>
          <Row>
            {logos.slice(0,3).map((logo, index) => (
              <ListItem
                key={index}
                logo={logo.src}
                head={logo.head}
                para={logo.para}
                link={logo.link}
                showLink={true}
              />
              
            ))}
          </Row>
          <div id="line-break"></div>
      
      </Container>

    </div>

    
  );
};

export default Features;
