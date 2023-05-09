import React from "react";
import Article from "./Article";

function ArticleList(props) {
const articles = props.posts.map((post, index) => (
<Article
key={index}
title={post.title}
date={post.date || "January 1, 1970"}
preview={post.preview}
/>
));

return <main>{articles}</main>;
}

export default ArticleList;