import React from 'react';
import Image from 'next/image';

import styles from '../styles/mediaSection.module.css';
import esmeraldaRadio from '../assets/esme_radio.jpg';
import ltImage from '../assets/LT.png';
import mittiImage from '../assets/mitti.svg';
import snImage from '../assets/sn.svg';
import aftonbladetImage from '../assets/aftonbladet.png';
import sverigesRadioImage from '../assets/sveriges radio.png';

const imageArray = [
  ltImage,
  snImage,
  mittiImage,
  aftonbladetImage,
  sverigesRadioImage,
];

function mediaSection() {
  return (
    <div className={styles.mediaSection}>
      <div className={styles.mediaSectionLeftSide}>
        <Image
          className={styles.mediaSectionLeftSideImg}
          alt="Esmeralda hos Sveriges Radio"
          src={esmeraldaRadio}
        />
      </div>
      <div className={styles.mediaSectionRightSide}>
        <h1 className={styles.mediaSectionH1}>Esmeralda i media</h1>
        <div className={styles.mediaImgs}>
          {imageArray.map((imageUrl, index) => (
            <div key={index} className={styles.mediaImgContainer}>
              <Image
                className={styles.mediaImg}
                alt={`Bild ${index + 1}`}
                src={imageUrl} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default mediaSection;
