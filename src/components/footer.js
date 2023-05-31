import React from 'react'
import Image from 'next/image'
import styles from '../styles/footer.module.css'
import Logo from '../assets/esmeralda_logo_white.png'

function footer() {
  return (
    <div className={styles.footerWrapper}>
      <Image className={styles.esmeraldatalloLogo} src={Logo} alt='Esmeralda Tällö Logo' />
        <p className={styles.footerParagraph}>Copyright &copy; 2023 Emma Janson</p>
    </div>
  )
}

export default footer