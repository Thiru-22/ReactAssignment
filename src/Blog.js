import React from 'react'
import { Container,Button,Image } from 'react-bootstrap'
import './Hero.css'
import './Blog.css'
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import person1 from './images/Dropdown.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
    const list=[
        {
            card:card1,
            dept:'Design',
            topic:'UX review presentations',
            text:'How do you create compelling presentations that wow your colleagues and impress your managers?',
            person:person1,
            name:'Olivia Rhye',
            date:'20 Jan 2024',
        },
        {
            card:card2,
            dept:'Product',
            topic:'Migrating to Linear',
            text:'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
            person:person2,
            name:'Phoenix Baker',
            date:'19 Jan 2024',
        },
        {
            card:card3,
            dept:'Software Engineering',
            topic:'Building your API stack',
            text:'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
            person:person3,
            name:'Lana Steiner',
            date:'18 Jan 2024',
        },

    ];
    const ListItem=({card,dept,topic,text,person,name,date})=>(
       
    <div id='cards'>
        <Image src={card} fluid id='card-img'/>
        <span>{dept}</span>
        <div className="divide">
            <h4>{topic}</h4>
            <MdArrowOutward  size={25}/>
        </div>
        <p>{text}</p>
        <Image src={person} fluid />
        <p><b>{name}</b></p>
        <p>{date}</p>
    </div>
    );
  return (
    <Container>
        <div className="container">
            <div className="part">
                <p>Our blog</p>
                <Button variant="link" id="btn-2">View all products</Button>
            </div>
            <h1>Lastest blog posts</h1>
            <p>Tool and strategies modern teams need to help their companies grow.</p>
        </div>
         <div id="card">
        {list.map((list,index)=>(
                <ListItem 
                key={index}
                card={list.card}
                dept={list.dept}
                topic={list.topic}
                text={list.text}
                person={list.person}
                name={list.name}
                date={list.date}
            />
        ))}
        </div>
        <div className="section2">
            <h1>Start your free trial</h1>
            <p>Join over 4,000+ startups already growing with Untitled.</p>
            <div className="button">
                  <button id='btn-1'>Learn more</button>
                  <button id="btn-2">Get started</button>
            </div>
        </div>
        
    </Container>
  )
}

export default Blog