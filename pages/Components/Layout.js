import React from "react";
import styles from "../../styles/Home.module.css";

function Layout({ children }) {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.color}>Welcome Header</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
