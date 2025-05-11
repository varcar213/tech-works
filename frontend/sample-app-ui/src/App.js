import React, { useState , useEffect } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import './styles/App.scss';
import ServiceCard from './components/ServiceCard';
import ImageCard from './components/ImageCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ToastProvider } from './components/ToastContext';
import DemoButtons from './components/DemoButtons';
import Loader from './components/Loader';
import ComponentRoutes from './routes/ComponentRoutes';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
const App = () => {

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
     
      <div>
        {loading ? <Loader /> : <h2>Spinner stopped! Data Loaded Successfully!</h2>}
      </div>
      <BrowserRouter>
          <ComponentRoutes />
      </BrowserRouter>
      <h2>Other Components</h2>
      <section id="tab" className="card-wrapper">
        <ToastProvider>
          <DemoButtons />
        </ToastProvider>
        <button onClick={() => setShowModal(true)} className="open-modal-btn">
          Open Modal
        </button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Welcome">
            <p>This is a sample modal. You can show terms, login forms, or alerts here.</p>
        </Modal>
      </section>     
      <h2>Cards</h2>
      <section id="cyberimages" className="card-wrapper">
        <ImageCard
          imageUrl="https://images.unsplash.com/photo-1740560051549-cc6799220d48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Cloud Security"
          description="Secure your cloud infrastructure with our expert solutions."
        />
        
        <ImageCard
          imageUrl="https://plus.unsplash.com/premium_photo-1670402130476-25aa8c1986c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Cloud Security"
          description="Secure your cloud infrastructure with our expert solutions."
        />
        
        <ImageCard
        imageUrl="https://images.unsplash.com/photo-1589128560340-b66ae74e4fc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/"
        title="Cloud Security"
        description="Secure your cloud infrastructure with our expert solutions."
      />
      </section>
      <section id="services" className="card-wrapper">
        <ServiceCard
          title="Vulnerability Assessment"
          description="Identify and mitigate security weaknesses in your system."
        />
        <ServiceCard
          title="DPDP Compliance"
          description="Ensure compliance with India's Data Protection regulations."
        />
        <ServiceCard
          title="Application Security"
          description="Protect your applications from threats and vulnerabilities."
        />
        </section>
        <h2>Changeable data</h2>
        <section id="services" className="card-wrapper">
          <Provider store={store}>
            <div style={{ display: 'flex' }}>
              <ProductList />
              <CartSidebar />
            </div>
          </Provider>
        </section>
        <Footer /> 
    </div>
  );
};

export default App;
