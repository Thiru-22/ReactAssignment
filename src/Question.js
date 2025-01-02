import React, { useState } from 'react';
import { Collapse, Container,Image ,Button} from 'react-bootstrap';
import './Question.css';
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
import group from './images/group.png';
import './Hero.css'

const Question = () => {
  const list = [
    { text: 'Is there a free trial available?' },
    { text: 'Can I change my plan later?' },
    { text: 'What is your cancellation policy?' },
    { text: 'Can other info be added to an invoice?' },
    { text: 'How does billing work?' },
    { text: 'How do I change my account email?' },
  ];

  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for each question
  const toggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Close if the same question is clicked again
  };

  const ListItem = ({ text, index, isOpen, toggle }) => (
    <div onClick={() => toggle(index)} style={{ cursor: 'pointer' }} className="q-pointer">
      <p id="q-para">{text}</p>
      {!isOpen ? (
        <BsPlusCircle size={25} />
      ) : (
        <BsDashCircle size={25} />
      )}
      <Collapse in={isOpen}>
        <div>
          <p id="description">
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
          </p>
        </div>
      </Collapse>
      <div id="line-break"></div>
    </div>
  );

  return (
    <Container>
      <div className="contain">
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know about the product and billing.</p>
        {list.map((item, index) => (
          <ListItem
            key={index}
            text={item.text}
            index={index}
            isOpen={openIndex === index}
            toggle={toggle}
          />
        ))}
      </div>
      <div className="part2">
        <Image src={group} fluid id='q-img'/>
        <h3>Still have questions?</h3>
        <p >Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <Button variant="link" id="btn-2">Get in touch</Button>
      </div>
    </Container>
  );
};

export default Question;
