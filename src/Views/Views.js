import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from '../components/about_me/AboutMe';
import Contact from '../components/contact/Contact';
import Home from '../components/home/Home';
import Projects from '../components/projects/Projects';

const Views = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact-me" element={<Contact />} />
  </Routes>
);

export default Views;
