import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
import './Hero.css'
import './Footer.css'
import logo from './images/logo.png'

const Footer = () => {
  const list = [
    {
      title: 'Product',
      items: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
    },
    {
      title: 'Company',
      items: ['About us', 'Careers', 'Press', 'News', 'Media kit', 'Contact'],
    },
    {
      title: 'Resources',
      items: ['Blog', 'Newsletter', 'Events', 'Help Center', 'Tutorials', 'Support'],
    },
    {
      title: 'Use cases',
      items: ['Startups', 'Enterprise', 'Solutions', 'Tutorials', 'Pricing', 'Releases'],
    },
    {
      title: 'Social',
      items: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'AngelList', 'Dribble'],
    },
    {
      title: 'Legal',
      items: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings', 'Contact'],
    },
  ];

  return (
    <Container  className="footer py-5">
      <Row>
        {list.map((section, index) => (
          <Col key={index} lg={2} md={4} sm={6} xs={12} className="mb-4">
            <h5 className="footer-title">{section.title}</h5>
            <ul className="list-unstyled">
              {section.items.map((item, idx) => (
                <li key={idx} className="footer-item">
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <div id="line-break"></div>
      <div className="end">
        
        <h3><Image src={logo} fluid/> Untitled UI</h3>
        <p>&copy; 2077 Untitled UI.All rights reserved.</p>
      </div>
    </Container>
  );
};

export default Footer;
