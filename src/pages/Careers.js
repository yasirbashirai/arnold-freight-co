import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaTruck, FaHandshake, FaChartLine, FaUsers,
  FaBriefcase, FaCheckCircle, FaPaperPlane
} from 'react-icons/fa';

import highwayTruck from '../assets/highway-truck.jpg';
import servicesTruck from '../assets/services-truck.png';

const TRUCK_IMAGES = {
  hero: servicesTruck,
  truck2: highwayTruck,
};

const Careers = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openingsRef, openingsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const perks = [
    { icon: <FaChartLine size={28} />, title: 'Growth Opportunity', desc: 'Join a growing company with room to advance your career in logistics.' },
    { icon: <FaHandshake size={28} />, title: 'Team Culture', desc: 'Work alongside dedicated professionals who value collaboration and respect.' },
    { icon: <FaTruck size={28} />, title: 'Industry Impact', desc: 'Play a key role in keeping supply chains moving across the nation.' },
    { icon: <FaUsers size={28} />, title: 'Supportive Environment', desc: 'We invest in our people with training, support, and competitive compensation.' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ====== HERO ====== */}
      <section ref={heroRef} style={{
        paddingTop: '140px', paddingBottom: '100px',
        background: '#0f1724', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: '-5%',
          backgroundImage: `url(${TRUCK_IMAGES.hero})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.25)',
        }} />
        <div className="gradient-animate" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(15,23,36,0.95), rgba(26,35,50,0.7), rgba(201,168,76,0.1))',
          backgroundSize: '200% 200%',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>JOIN OUR TEAM</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', color: '#fff', margin: '12px 0 16px', lineHeight: '1.1' }}>
              Build Your Career at <span className="text-gradient-gold">Arnold Freight</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 36px' }}>
              We're looking for driven professionals who want to make an impact in the freight and logistics industry.
            </p>
            <a href="#openings" className="btn-gold pulse-ring" style={{ fontSize: '16px', padding: '16px 40px' }}>
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====== WHY JOIN ====== */}
      <section ref={whyRef} style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>WHY JOIN US</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 12px' }}>
              Why Join <span className="text-gradient-gold">Arnold Freight?</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '17px' }}>Build your career with a company that values its people</p>
            <div className="gold-line" style={{ margin: '16px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {perks.map((p, i) => (
              <motion.div
                key={i}
                className="service-card-3d"
                initial={{ opacity: 0, y: 40 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="service-card-inner" style={{ textAlign: 'center' }}>
                  <div className="icon-float">{p.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TRUCK IMAGE BREAK ====== */}
      <section style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${TRUCK_IMAGES.truck2})`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        }} />
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(15,23,36,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', padding: '0 24px' }}
          >
            <h3 style={{ color: '#fff', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: '800', marginBottom: '12px' }}>
              Join a Team That <span className="text-gradient-gold">Moves America</span>
            </h3>
            <p style={{ color: '#d1d5db', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              Be part of a company that keeps supply chains running and businesses growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== OPEN POSITIONS ====== */}
      <section id="openings" ref={openingsRef} className="bg-navy" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={openingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>OPPORTUNITIES</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', color: '#fff', margin: '10px 0 12px' }}>
              Open <span className="text-gradient-gold">Positions</span>
            </h2>
            <div className="gold-line" style={{ margin: '0 auto' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={openingsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              padding: '48px 32px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '16px',
              border: '2px solid rgba(201,168,76,0.15)',
              textAlign: 'center',
            }}
          >
            <FaBriefcase style={{ color: '#c9a84c', fontSize: '40px', marginBottom: '20px' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginTop: 0, marginBottom: '12px' }}>
              No Open Positions at This Time
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.7', maxWidth: '500px', margin: '0 auto 24px' }}>
              We don't have any open positions right now, but we're always looking for talented people. Submit your information below and we'll reach out when opportunities become available.
            </p>
            <a href="#apply" className="btn-gold" style={{ fontSize: '15px', padding: '14px 32px' }}>
              Submit Your Information
            </a>
          </motion.div>
        </div>
      </section>

      {/* ====== APPLICATION FORM ====== */}
      <section id="apply" style={{ padding: '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>STAY CONNECTED</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 12px' }}>
              Join Our <span className="text-gradient-gold">Talent Pool</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '17px' }}>Send us your information and we'll reach out when positions open up</p>
            <div className="gold-line" style={{ margin: '16px auto 0' }} />
          </motion.div>

          <AnimatePresence>
            {formSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{
                  background: 'rgba(201, 168, 76, 0.12)', border: '2px solid rgba(201,168,76,0.3)',
                  padding: '16px 24px', borderRadius: '12px', marginBottom: '24px',
                  display: 'flex', alignItems: 'center', gap: '12px',
                  color: '#b8943a', fontSize: '15px', fontWeight: '600',
                }}
              >
                <FaCheckCircle size={20} /> Thank you for your application! We'll review it and get back to you soon.
              </motion.div>
            )}
          </AnimatePresence>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#fff', padding: '44px', borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              {[
                { label: 'First Name', type: 'text', placeholder: 'John' },
                { label: 'Last Name', type: 'text', placeholder: 'Doe' },
              ].map((field, i) => (
                <div key={i}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '8px', color: '#374151', letterSpacing: '1px', textTransform: 'uppercase' }}>{field.label} *</label>
                  <input type={field.type} className="form-input" required placeholder={field.placeholder} />
                </div>
              ))}
            </div>

            {[
              { label: 'Email', type: 'email', placeholder: 'john@example.com' },
              { label: 'Phone', type: 'tel', placeholder: '(555) 000-0000' },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '8px', color: '#374151', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {field.label} {i === 0 ? '*' : ''}
                </label>
                <input type={field.type} className="form-input" required={i === 0} placeholder={field.placeholder} />
              </div>
            ))}

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '8px', color: '#374151', letterSpacing: '1px', textTransform: 'uppercase' }}>Area of Interest *</label>
              <select className="form-input" required style={{ cursor: 'pointer' }}>
                <option value="">Select an area...</option>
                <option>Freight Brokerage</option>
                <option>Logistics / Operations</option>
                <option>Sales</option>
                <option>Administration</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', marginBottom: '8px', color: '#374151', letterSpacing: '1px', textTransform: 'uppercase' }}>Tell Us About Yourself</label>
              <textarea className="form-input" rows="5" placeholder="Share your experience and why you'd like to join Arnold Freight Co..." style={{ resize: 'vertical' }} />
            </div>

            <motion.button
              type="submit"
              className="btn-gold"
              style={{ width: '100%', fontSize: '16px', padding: '16px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane /> Submit Application
            </motion.button>
          </motion.form>

          <p style={{ textAlign: 'center', marginTop: '24px', color: '#6b7280', fontSize: '14px' }}>
            Or email your resume directly to{' '}
            <a href="mailto:info@arnoldfreightco.com" style={{ color: '#c9a84c', textDecoration: 'none', fontWeight: '700' }}>info@arnoldfreightco.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
