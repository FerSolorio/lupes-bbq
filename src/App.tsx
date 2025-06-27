import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCarousel from './components/ProductCarousel';
import BBQBox from './components/BBQBox';
import TipsSection from './components/TipsSection';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';
import './styles.module.css';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ProductCarousel />
            <BBQBox />
            <TipsSection />
            <ValueProposition />
            <Footer />
        </div>
    );
};

export default App;
