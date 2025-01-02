// import logo from './logo.svg';
import user from './images/Dropdown.png';
import edit from './images/icon1.png';
import inbox from './images/icon2.png';
import settings from './images/icon3.png';
import help from './images/icon4.png';
import logout from './images/icon1.png';
import './DropMenu.css';
import { BsPerson } from "react-icons/bs";

import React, {useState, useEffect, useRef} from 'react';

function DropMenu() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user} alt="" />
        </div>

        <div className={`menu ${open? 'active' : 'inactive'}`} >
            <div className="m-profile">
                <img src={user} alt="" />
                <div className="content">
                    <h5>Olivia Rhye</h5>
                    <p>olivia@untitledui.com</p>
                </div>
            </div>
          <ul>
            <DropdownItem img = {<BsPerson />} text = {"View profile"}/>
            <DropdownItem img = {edit} text = {"Settings"}/>
            <DropdownItem img = {inbox} text = {"Keyboard shortcuts"}/>
            <DropdownItem img = {settings} text = {"Company profile"}/>
            <DropdownItem img = {help} text = {"Team"}/>
            <DropdownItem img = {logout} text = {"Invite colleagues"}/>
            <DropdownItem img = {logout} text = {"Slack Community"}/>
            <DropdownItem img = {logout} text = {"Support"}/>
            <DropdownItem img = {logout} text = {"API"}/>
            <DropdownItem img = {logout} text = {"Log out"}/>

          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img} alt="" />
      <a href="http">{props.text}</a>
    </li>
  );
}

export default  DropMenu;