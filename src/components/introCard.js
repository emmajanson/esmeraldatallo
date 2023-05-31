import React, { useState, useEffect } from 'react';
import styles from '../styles/introCard.module.css';

function IntroCard({ title }) {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true); // När komponenten har monterats, aktivera slideeffekten
  }, []);

  const handleContactClick = () => {
    // Klickhanterare för kontaktlänken
    window.scrollTo({
      top: document.getElementById('Contact').offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles.introCard} ${slideIn ? styles.slideIn : ''}`}>
      <h1 className={styles.introCardHeading}>Esmeralda</h1>
      <h1 className={styles.introCardHeading}>Tällö</h1>
      <p className={styles.introCardParagraph}>
        Självförtroende, självbild och självkänsla spelar en stor roll för
        ungdomars utveckling och framgång i livet, särskilt när det kommer till
        skola och utbildning.
      </p>
      <p className={styles.introCardParagraph}>
        Nu erbjuder jag föreläsningar som är utformade för att hjälpa och
        inspirera ungdomar att upptäcka sin inre styrka, tro på sina förmågor
        och ta steget mot personlig utveckling.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.buttoncta} onClick={handleContactClick}>
          KONTAKTA MIG!
        </button>
      </div>
    </div>
  );
}

export default IntroCard;
