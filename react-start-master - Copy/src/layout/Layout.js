import React from "react";
import { Link } from "react-router-dom";
import styles from "./layout.module.css";
export const Layout = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.pages}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/product">Product</Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};
