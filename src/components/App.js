import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  const name = "My Blog";

  return (
    <div>
      <Header name={name} />
      {/* other components */}
    </div>
  );
}

export default App;
