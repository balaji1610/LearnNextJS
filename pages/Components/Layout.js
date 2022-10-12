import React from "react";
import styles from "../../styles/Home.module.css";
import Nav from "../Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />{" "}
      <div>
        <main className={styles.main}>
          <h1 className={styles.color}>Welcome Header</h1>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
