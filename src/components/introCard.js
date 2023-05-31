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
        Självförtroende, självbild och självkänsla spelar idag en stor roll i
        många ungdomars liv. ärskilt när det kommer till skola och utbildning.
      </p>
      <p className={styles.introCardParagraph}>
        Nu erbjuder jag föreläsningar som är utformade för att inspirera
        ungdomar. Målet är att de ska upptäcka sin inre styrka, tro på den egna förmågan och ta
        steget mot en personlig utveckling.
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
