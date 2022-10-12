import Link from "next/link";
import React from "react";
import styles from "../../styles/ArticelItem.module.css";

function ArticelItem({ articles }) {
  return (
    <>
      {" "}
      <Link href={`/article/${articles.id}`}>
        <a>
          <h1>Title:{articles.title}</h1>
        </a>
      </Link>
      {/* <div className={styles.border}>
        <p>
          <h1>BODY</h1>
          {articles.body}
        </p>
      </div> */}
    </>
  );
}

export default ArticelItem;
