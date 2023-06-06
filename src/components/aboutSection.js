import React from 'react';
import styles from '../styles/aboutSection.module.css';

function aboutSection() {
  return (
    <div className={styles.aboutsection}>
      <div className={styles.aboutsectionContentWrapper}>
        <h1 className={styles.aboutSectionH1}>Om</h1>
        <h2 className={styles.aboutSectionH2}>Esmeralda Tällö</h2>
        <h3 className={styles.aboutSectionH3}> Föreläsare & Inspiratör</h3>
        <p className={styles.aboutSectionParagraph}>
          Mitt namn är Esmeralda Tällö och jag var under året 2023 en av
          deltagarna i Elitstyrkans Hemligheter på Tv4. Jag brinner för att
          inspirera människor. Genom att dela med mig av mina egna erfarenheter,
          lärdomar och utmaningar hoppas jag kunna vägleda och motivera ungdomar
          att fatta kloka beslut som leder dem framåt.
        </p>
      </div>
    </div>
  );
}

export default aboutSection;
