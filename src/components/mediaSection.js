import React from 'react';
import Image from 'next/image';

import styles from '../styles/mediaSection.module.css';
import esmeraldaRadio from '../assets/esme_radio.jpg';
import ltImage from '../assets/LT.svg';
import mittiImage from '../assets/mitti.svg';
import snImage from '../assets/sn.svg';
import aftonbladetImage from '../assets/aftonbladet.svg';
import sverigesRadioImage from '../assets/sverigesradio.svg';
import tv4 from '../assets/tv4.svg'

const imageArray = [
  {
    url: ltImage,
    link: 'https://www.lt.se/2023-03-24/esmeralda-fran-igelsta-tar-revansch-i-tv4s-tuffa-program',
  },
  {
    url: snImage,
    link: 'https://sn.se/bli-prenumerant/artikel/re1py85j/sn-bd-0kr-dp1',
  },
  {
    url: mittiImage,
    link: 'https://www.mitti.se/nyheter/nytorpsskolans-esmeralda-pushar-sina-militara-granser-6.3.70804.5ab1adcac0',
  },
  {
    url: aftonbladetImage,
    link: 'https://www.aftonbladet.se/nojesbladet/a/on1JKV/nya-elitstyrkan-moter-utmaningar-i-fjallmiljo',
  },
  {
    url: sverigesRadioImage,
    link: 'https://sverigesradio.se/artikel/thomas-esmeralda-och-sebastian-pressar-sig-sjalva-i-tv',
  },
  {
    url: tv4,
    link: 'https://www.tv4.se/klipp/va/20509102/hon-var-inte-som-alla-andra-har-vuxit-efter-min-diagnos',
  },
];

function mediaSection() {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

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
          {imageArray.map((image, index) => (
            <div key={index} className={styles.mediaImgContainer}>
              <Image
                className={styles.mediaImg}
                alt={`Bild ${index + 1}`}
                src={image.url}
                onClick={() => handleClick(image.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default mediaSection;
