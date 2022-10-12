import React from "react";
import ArticelItem from "./ArticelItem";
function ArticelList({ articles }) {
  return (
    <div>
      {articles.map((articles) => (
        <ArticelItem key={articles.it} articles={articles} />
      ))}
    </div>
  );
}

export default ArticelList;
