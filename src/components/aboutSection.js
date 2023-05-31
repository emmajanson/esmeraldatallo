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
          Mitt namn är Esmeralda, deltagare i dokusopan ESH. Jag brinner för att
          inspirera ungdomar och deras personliga utveckling. Nu erbjuder jag
          föreläsningar där syftet är att inspirera ungdomar att använda sina
          tidigare upplevelser och utmaningar som drivkraft för att skapa en
          meningsfull framtid.
        </p>
        <p className={styles.aboutSectionParagraph}>
          Genom att dela med mig av mina egna erfarenheter och lärdomar hoppas
          jag kunna ge verktyg och motivation som behövs för att forma en god
          framtid. Jag berättar gärna om de utmaningar jag har mött och
          övervunnit på min egen resa, delar med mig av praktiska verktyg och
          övriga tips som behövs för att navigera genom livets olika utmaningar.
          Ungdomar idag behöver vägledning i att fatta medvetna och
          välinformerade beslut eftersom kraften att påverka sin framtid är
          stor. Vill ni ha med mig på resan och hjälp med detta? Boka mig nu!
        </p>
      </div>
    </div>
  );
}

export default aboutSection;
