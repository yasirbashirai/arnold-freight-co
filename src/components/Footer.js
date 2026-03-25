import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy-dark" style={{ color: '#ffffff' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Arnold Freight Co." style={{ height: '60px', marginBottom: '16px' }} />
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.7', marginTop: '16px' }}>
              Arnold Freight Co. is committed to providing reliable, efficient freight solutions with a focus on communication, speed, and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#c9a84c' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name} style={{ marginBottom: '10px' }}>
                  <Link
                    to={link.path}
                    style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = '#c9a84c'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#c9a84c' }}>Why Choose Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Direct access to your freight agent',
                'Fast response times',
                'Personalized service',
                'Reliable carrier network',
              ].map((item, i) => (
                <li key={i} style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '10px', paddingLeft: '16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#c9a84c' }}>&#8250;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#c9a84c' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a href="tel:5551234567" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                <FaPhone style={{ color: '#c9a84c' }} /> (555) 123-4567
              </a>
              <a href="mailto:info@arnoldfreight.com" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>
                <FaEnvelope style={{ color: '#c9a84c' }} /> info@arnoldfreight.com
              </a>
              <p style={{ color: '#9ca3af', fontSize: '14px', display: 'flex', alignItems: 'flex-start', gap: '10px', margin: 0 }}>
                <FaMapMarkerAlt style={{ color: '#c9a84c', marginTop: '3px', flexShrink: 0 }} /> 1234 Logistics Lane, City, State, 12345
              </p>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[FaFacebookF, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a key={i} href="#" style={{
                  width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #c9a84c',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#c9a84c', textDecoration: 'none', transition: 'all 0.3s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#1a2332'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c'; }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(201, 168, 76, 0.2)', padding: '20px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
            &copy; 2026 Arnold Freight Co. LLC. All rights reserved.
          </p>
          <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>
            DOT #1234567 | MC #7854321
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
