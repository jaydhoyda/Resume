import { lazy, Suspense } from "react";
import "./App.css";

import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <About />
          <Project />
          <Skills />
          <Resume />
          <Contact />
        </Suspense>
      </main>

      <footer>
        <p>© 2026 My Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;