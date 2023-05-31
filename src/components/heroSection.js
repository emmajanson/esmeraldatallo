import React from 'react';
import Image from 'next/image';
import styles from '../styles/heroSection.module.css';
import heroImg from '../assets/esmeraldatallo.jpg';
import IntroCard from '../components/introCard';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <Image
        className={styles.heroImg}
        src={heroImg}
        alt="Hero Image"
        id="Hero"
      />
      <IntroCard />
    </section> 
  );
}

export default HeroSection;
