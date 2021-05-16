import React from 'react';
import './Components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Réalisé par Perrin, dernière mise à jour le 16 Mai 2021</p>
      <p><a href="https://github.com/pgrandne/sispeal/">Voir le code source sur github</a></p>
      <a href="https://www.services.eaufrance.fr/donnees/telechargement"> Lien vers les données SISPEA utilisées</a>
    </footer>

  )
};

export default Footer;