import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p> Please take a look at my CV, and Feel Free to Reach Out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/CV.png")}
            alt="CV icon"
          />
          <a href="https://drive.google.com/file/d/1bk_A7OrN0kzYfY4Ycnep3-Es7oklhrSM/view?usp=drive_link">Ibukunoluwa-Akiode-CV.pdf</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ibukunakiode3@gmail.com">ibukunakiode3@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ibukunoluwa-akiode/">linkedin.com/in/ibukunoluwa-akiode/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/IbukunAki">github.com/IbukunAki</a>
        </li>
      </ul>
    </footer>
  );
};