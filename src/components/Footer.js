import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo-transparent.png';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="bg-navy-dark" style={{ color: '#ffffff', position: 'relative', overflow: 'hidden' }}>
      {/* Animated truck silhouette */}
      <div className="truck-animate" style={{ fontSize: '120px', color: 'rgba(201,168,76,0.04)' }}>
        <FaTruck />
      </div>

      {/* Gold top border */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div ref={ref} style={{ maxWidth: '1280px', margin: '0 auto', padding: '70px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Arnold Freight Co." style={{ height: '60px', marginBottom: '20px' }} />
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.8' }}>
              Arnold Freight Co. is committed to providing reliable, efficient freight solutions with a focus on communication, speed, and service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#c9a84c' }}>Quick Links</h4>
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Careers', path: '/careers' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link key={link.name} to={link.path}
                style={{ display: 'block', color: '#9ca3af', textDecoration: 'none', fontSize: '14px', padding: '6px 0', transition: 'all 0.3s', paddingLeft: '0' }}
                onMouseEnter={(e) => { e.target.style.color = '#c9a84c'; e.target.style.paddingLeft = '8px'; }}
                onMouseLeave={(e) => { e.target.style.color = '#9ca3af'; e.target.style.paddingLeft = '0'; }}>
                {link.name}
              </Link>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#c9a84c' }}>Why Choose Us</h4>
            {['Direct access to your freight agent', 'Fast response times', 'Personalized service', 'Reliable carrier network'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c9a84c', flexShrink: 0 }} />
                <span style={{ color: '#9ca3af', fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px', color: '#c9a84c' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <FaPhone />, text: '(555) 123-4567', href: 'tel:5551234567' },
                { icon: <FaEnvelope />, text: 'info@arnoldfreight.com', href: 'mailto:info@arnoldfreight.com' },
                { icon: <FaMapMarkerAlt />, text: '1234 Logistics Lane, City, State, 12345', href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#c9a84c', marginTop: '2px' }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#c9a84c'}
                      onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>{item.text}</a>
                  ) : (
                    <span style={{ color: '#9ca3af', fontSize: '14px' }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#social"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(201,168,76,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#c9a84c', textDecoration: 'none', transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#1a2332'; e.currentTarget.style.borderColor = '#c9a84c'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'; }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>&copy; 2026 Arnold Freight Co. LLC. All rights reserved.</p>
          <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>DOT #1234567 | MC #7854321</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
