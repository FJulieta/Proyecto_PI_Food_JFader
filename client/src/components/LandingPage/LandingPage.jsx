import React from 'react';
import { NavLink } from 'react-router-dom';
import './landingPage.module.css';
import  '../Assets/bg2.jpg'
export default function LandingPage() {
  return (
    <div className="All">
      <div className='container-left-landing'>
        <div className='container-img-landingpage'>
          <img className='img-landingpage' src={require('../Assets/bg2.jpg')} alt='img-landing' />
        </div>
      </div>

      <div className='container-rigth-landing'>
        <div className='container-text'>
          <h2>APP FOOD</h2>
          <p>AQUÍ ENCONTRARÁS TODO LO QUE NECESITAS PARA SORPRENDER A TUS SERES QUERIDOS. TAMBIÉN ENCONTRARÁS RECETAS, TIPS CULINARIOS, RECETAS SEGÚN TUS PREFERENCIAS DIETARIAS Y MUCHO MÁS.</p>
        </div>
        <div className="content">
          <NavLink className="NavLink" to="/home">
            <button>Explorar Recetas</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
