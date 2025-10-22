import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Computing Student</h3>
              <p>
                Building a strong foundation in programming and problem-solving through my Computer Science degree at the University of Dundee.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Collaborative Developer</h3>
              <p>
                Gained experience working on group projects and hackathons that strengthened my teamwork and technical skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Tech Innovator</h3>
              <p>
                Contributed to concept and design projects like Sok Sabai, focused on improving student well-being through technology.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
