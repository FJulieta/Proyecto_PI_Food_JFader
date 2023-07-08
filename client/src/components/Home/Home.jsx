import React, { useEffect, useState } from "react";
import './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from "../../redux/actions";
import { NavLink } from 'react-router-dom';
import Filter from '../Filter/Filter';
import Card from '../Cards/Card';
import Paginado from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  function handleClick(event) {
    event.preventDefault();
    dispatch(getRecipes());
  }

  const allRecipes = useSelector((state) => state.recipes);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const [orden, setOrden] = useState('');

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 
  return (
    <div className="HomeAll">
      <div className="container-home">
        <Nav handleClick={handleClick} />
        <Filter
          setCurrentPage={setCurrentPage}
          setOrden={setOrden}
          orden={orden}
        />

        <div className="title">
          <h1 className="page-title">PROYECT FOOD</h1>
        </div>

        <div className="paginado">
          <Paginado
            key="paginado"
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </div>

        <div className="row">
          {currentRecipes.map((element) => (
            <NavLink to={"/detail/" + element.id} key={element.id}>
              <Card name={element.name} imagen={element.imagen} diets={element.diets} typeDiets={element.typeDiets} />
            </NavLink>
          ))}
        </div>

        <div className="paginado">
          <Paginado
            key="paginado"
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            paginado={paginado}
            currentPage={currentPage}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}