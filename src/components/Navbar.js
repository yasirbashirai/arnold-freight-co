import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-navy transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Arnold Freight Co." style={{ height: '55px', width: 'auto' }} />
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  color: isActive(link.path) ? '#c9a84c' : '#ffffff',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease',
                  borderBottom: isActive(link.path) ? '2px solid #c9a84c' : '2px solid transparent',
                  paddingBottom: '4px',
                }}
                onMouseEnter={(e) => { if (!isActive(link.path)) e.target.style.color = '#c9a84c'; }}
                onMouseLeave={(e) => { if (!isActive(link.path)) e.target.style.color = '#ffffff'; }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold" style={{ fontSize: '14px', padding: '10px 22px' }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" style={{
            background: '#1a2332',
            padding: '20px 0',
            borderTop: '1px solid rgba(201, 168, 76, 0.2)',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  display: 'block',
                  color: isActive(link.path) ? '#c9a84c' : '#ffffff',
                  textDecoration: 'none',
                  padding: '12px 0',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold" style={{ marginTop: '12px', textAlign: 'center', display: 'block' }}>
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
