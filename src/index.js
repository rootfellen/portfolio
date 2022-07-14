import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./Pages/Works/Works";
import About from "./Pages/About/About";
import App from "./App";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import WorkDescription from "./Components/Work/WorkDescription/WorkDescription";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="works" element={<Works />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="work-description">
          <Route path=":id" element={<WorkDescription />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
