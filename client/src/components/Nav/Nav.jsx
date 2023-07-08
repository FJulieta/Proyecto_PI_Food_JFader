import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./nav.module.css";

export default function Nav({ handleClick }) {
  return (
    <div className="nav-container">
      <NavLink to="/recipe">
        <button className="nav-button">Create Recipe</button>
      </NavLink>
      <SearchBar />
      <button onClick={(event) => handleClick(event)} className="nav-button">
        All Recipes
      </button>
    </div>
  );
}

