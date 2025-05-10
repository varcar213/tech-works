import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ComponentList from '../components/ComponentList';
import Accordion from '../components/Accordion';
import Modal from '../components/Modal';
import PricingPlans from '../components/PricingPlans';
import ServiceCard from '../components/ServiceCard';
import ImageCard from '../components/ImageCard';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import Tabs from '../components/Tabs';
import DarkModeToggle from '../components/DarkModeToggle';
import CardGrid from '../components/CardGrid';

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ComponentList />} />
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/pricing" element={<PricingPlans />} />
      <Route path="/serviceCard" element={<ServiceCard />} />
      <Route path="/imageCard" element={<ImageCard />} />
      <Route path="/header" element={<Header />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/contactform" element={<ContactForm />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/sidebar" element={<Sidebar />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/tabs" element={<Tabs />} />
      <Route path="/darkmodetoggle" element={<DarkModeToggle />} />
      <Route path="/cardgrid" element={<CardGrid />} />
    </Routes>
  );
};

export default ComponentRoutes;
