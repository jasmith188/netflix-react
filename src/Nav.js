import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={()=> history.push("/")}
          className="nav__logo"
          src="https://i.pinimg.com/originals/dc/53/44/dc534483cfdf7b27b55ad369865deb1a.png"
          alt=""
        />
        <img
          onClick={()=> history.push("./profile")}
          className="nav__avatar"
          src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
