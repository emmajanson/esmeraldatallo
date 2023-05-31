import React from 'react';
import styles from '../styles/contactSection.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_9la1z7a',
      'template_ggahnfo',
      form.current,
      'Sp4hM-d5_JqJ04Smj'
    );

    e.target.reset();
  };

  return (
    <section id="Contact" className={styles.contactSection}>
      <h1 className={styles.contactSectionH1}>Vill du boka mig?</h1>
      <h2 className={styles.contactSectionH2}>
        Fyll i formuläret nedan så hörs vi!
      </h2>
      <div className={styles.contactContainer}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ditt namn"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Din email"
            required
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Ditt meddelande"
            required
          ></textarea>
          <button type="submit" className={styles.buttoncta}>
            SKICKA!
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
