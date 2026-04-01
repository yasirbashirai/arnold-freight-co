import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-new.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-scrolled bg-navy-dark' : 'bg-navy'}`}
      style={{ borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link to="/">
              <motion.img
                src={logo}
                alt="Arnold Freight Co."
                style={{ height: '60px', width: 'auto' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>

            {/* Desktop Nav — always visible on desktop, hidden on mobile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden md:flex">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path}
                  style={{
                    color: isActive(link.path) ? '#c9a84c' : '#ffffff',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease',
                    background: isActive(link.path) ? 'rgba(201,168,76,0.1)' : 'transparent',
                    letterSpacing: '0.5px',
                  }}
                  onMouseEnter={(e) => { if (!isActive(link.path)) { e.target.style.color = '#c9a84c'; e.target.style.background = 'rgba(201,168,76,0.08)'; }}}
                  onMouseLeave={(e) => { if (!isActive(link.path)) { e.target.style.color = '#ffffff'; e.target.style.background = 'transparent'; }}}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          </div>

          {/* Get a Quote button — right side */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="hidden md:flex">
            <Link to="/contact" className="nav-cta">
              Get a Quote
            </Link>
          </motion.div>

          {/* Mobile Toggle — ONLY visible on mobile via CSS media query */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: '#fff', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', display: 'none' }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', borderTop: '1px solid rgba(201,168,76,0.2)', display: 'none' }}
            >
              <div style={{ padding: '20px 0' }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      style={{
                        display: 'block', color: isActive(link.path) ? '#c9a84c' : '#fff',
                        textDecoration: 'none', padding: '12px 0', fontSize: '16px', fontWeight: '500',
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <Link to="/contact" className="btn-gold" style={{ marginTop: '12px', textAlign: 'center', display: 'block' }}>
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Gold accent line under navbar */}
      <div className="nav-gold-line" />
    </motion.nav>
  );
};

export default Navbar;
