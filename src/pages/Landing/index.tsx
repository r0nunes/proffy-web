import React, { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing(): ReactElement {
  const [totalConnections, settotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      settotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container" id="logo">
          <img src={logoImg} alt="Proffy" />
          <h2>A Sua plataforma de estudos online.</h2>
        </div>
        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar agpra
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 
          {' '}
          {totalConnections}
          {' '}
          conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
