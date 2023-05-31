import React from 'react';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';

import Logo from '../assets/esmeralda_logo_white.png'

function Navbar() {
  const handleLogoClick = () => {
    // Klickhanterare för loggan
    window.scrollTo({
      top: document.getElementById('Hero').offsetTop,
      behavior: 'smooth',
    });
  };

  const handleContactClick = () => {
    // Klickhanterare för kontaktlänken
    window.scrollTo({
      top: document.getElementById('Contact').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLeftSide}>
        <div className={styles.esmeraldatalloLogoWrapper} onClick={handleLogoClick}>
          <Image className={styles.esmeraldatalloLogo} src={Logo} alt='Esmeralda Tällö Logo' />
        </div>
      </div>

{/*       <div className={styles.navbarRightSide}>
        <div className={styles.contactLink} onClick={handleContactClick}>
          Kontakt
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
