// App.js

import React from "react";
import blogData from "../data/blog.js";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Overreacted by Amon Kiprotich</h1>
      </header>

      <main>
        <ArticleList posts={blogData} />
      </main>

      <aside>
        <p></p>
      </aside>
    </div>
  );
}

export default App;