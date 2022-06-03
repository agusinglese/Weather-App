import React from "react";
import Search from "../search/Search";
import s from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <hr />
      <nav className={s.navbar}>
        <img
          src="https://img2.freepng.es/20180421/uuw/kisspng-ios-7-weather-computer-icons-iphone-ios-5adab94196a697.3057354815242837136171.jpg"
          alt="clima"
        />
        <ul>
          <Link to="/">
            <li>Weather App</li>
            <li>Home</li>
          </Link>
        </ul>
        <Search onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;
