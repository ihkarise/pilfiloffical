/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import UseCases from "./pages/UseCases";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Digital from "./pages/Digital";
import Contact from "./pages/Contact";
import Technical from "./pages/Technical";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="w-full h-full flex flex-col"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  // Using cloneElement on Routes directly is complex. Instead wrap the inner elements inside the Route.
  // Actually, AnimatePresence needs the key attached to the immediate child which is Routes here, but Routes ignores key in TS props.
  // So we wrap Routes in a div with the key.
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="w-full h-full flex flex-col items-stretch flex-grow">
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
          <Route path="/use-cases" element={<PageWrapper><UseCases /></PageWrapper>} />
          <Route path="/how-it-works" element={<PageWrapper><HowItWorks /></PageWrapper>} />
          <Route path="/benefits" element={<PageWrapper><Benefits /></PageWrapper>} />
          <Route path="/digital" element={<PageWrapper><Digital /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/technical" element={<PageWrapper><Technical /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-bg-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow flex flex-col relative z-0">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
