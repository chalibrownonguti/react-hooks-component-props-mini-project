import React from "react";

function Article(props) {
const minutesToRead = Math.ceil(props.preview.length / 100);

let emoji = "☕️";
if (minutesToRead >= 30) {
emoji = "🍱";
}

let cups = "";
if (minutesToRead < 30) {
cups = "☕️".repeat(Math.ceil(minutesToRead / 5));
} else {
cups = "🍱".repeat(Math.ceil(minutesToRead / 10));
}

return (
<article>
<h3>{props.title}</h3>
<small>{props.date}</small>
<p>{props.preview}</p>
<div>
{emoji} {cups} {minutesToRead} min read
</div>
</article>
);
}

export default Article;