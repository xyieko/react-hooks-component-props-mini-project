import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";


const blogName = "Overreacted";
const blogAbout = "A blog about React and the things I learn along the way.";
const blogImage = "https://via.placeholder.com/215";
const posts = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    date: "April 21, 2025",
    preview: "Let’s go deep into how hooks work under the hood.",
    minutes: 7,
  },
  {
    id: 2,
    title: "The Future of React",
    preview: "A look at what's coming in React 19 and beyond.",
    minutes: 35,
  },
  {
    id: 3,
    title: "Styling in React",
    date: "March 14, 2025",
    preview: "CSS-in-JS, Tailwind, and other styling options explained.",
    minutes: 5,
  },
];

function App() {
  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
