import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar/Navbar';
import NavbarCenter from './components/Header/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './pages/Services';
import CustomModal from './components/CustomModal/CustomModal';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/ScrollTop/ScrollToTop';


// Register ScrollTrigger if you are using it for other animations
gsap.registerPlugin(ScrollTrigger);
const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    
    useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    window.lenis = lenis; // Make global

    // Use a named function for the animation frame
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
        cancelAnimationFrame(rafId); // Clean up the frame request
        window.lenis = null;
    };
}, []);
    return (
        <>
            <ScrollToTop />
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path='/' element={<Home openModal={toggleModal} />} />
                <Route path='/about' element={<About openModal={toggleModal} />} />
                <Route path='/contact-us' element={<Contact openModal={toggleModal} />} />
                <Route path='/services' element={<Services openModal={toggleModal} />} />
                {/* Services */}
                <Route path='/services/ebook-cover-design' element={<Services openModal={toggleModal} />} />
                <Route path='/services/ebook-editing' element={<Services openModal={toggleModal} />} />
                <Route path='/services/ebook-writng' element={<Services openModal={toggleModal} />} />
                <Route path='/services/ebook-publishing' element={<Services openModal={toggleModal} />} />
                <Route path='/services/ebook-marketing' element={<Services openModal={toggleModal} />} />
                {/* Genre */}
                <Route path='/genre/autobiography' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/business-book' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/childrens-book' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/fiction' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/mystery-book' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/non-fiction' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/novel' element={<Services openModal={toggleModal} />} />
                <Route path='/genre/self-help' element={<Services openModal={toggleModal} />} />

                {/* 404 error */}
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<NotFound />} />

            </Routes>

            <Footer />

            {/* Pass state and close function to your Modal */}
            <CustomModal show={isModalOpen} onClose={toggleModal} />
        </>
    )
}

export default App
