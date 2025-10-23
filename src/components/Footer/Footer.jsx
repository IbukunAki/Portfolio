import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>© {year} Ibukunoluwa Akiode — All Rights Reserved.</p>
    </footer>
  );
};

