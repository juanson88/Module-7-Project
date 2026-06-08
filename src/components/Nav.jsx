import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    let navigate = useNavigate()
  return (
    <>
      <nav>
        <figure>
          <img
            src="https://previews.123rf.com/images/imogi/imogi1805/imogi180500166/102169832-vintage-film-reel-concept.jpg"
            className="nav__logo"
            alt=""
          />
        </figure>
          <button onClick={() => navigate('/')} >Home</button>
      </nav>
    </>
  );
};

export default Nav;
