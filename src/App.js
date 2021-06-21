// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from "react"


// import Header from './parts/Header/Header';
import Home from './pages/Home/Home'
// import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Education from './pages/Education/Education'
import Footer from './parts/Footer/Footer'
import Contact from './pages/Contact/Contact'
// Skills
import Skills from "./pages/skills/Skills"
import './App.css';

function App() {
  return (
    // <Router>
      <div className="App">
        {/* <Header /> */}
        <Home />

        {/* <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/blog">
              <Blog />
          </Route>
          <Route exact path="/projects">
              <Projects />
          </Route>
          <Route exact path="/resume">
              <Resume />
          </Route>

        </Switch> */}
        <Education />
        <Skills />
        <Projects />
        <Contact />
        {/* <Achivement /> */}
        <Footer />
  
      </div>
    // </Router>
  );
}

export default App;
