import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  FaHandshake, FaClock, FaShieldAlt, FaTruck, FaCheckCircle, FaPhoneAlt,
  FaQuoteLeft, FaAward, FaUsers, FaGlobeAmericas
} from 'react-icons/fa';

import truckImg from '../assets/truck-highway.jpg';

const TRUCK_IMAGES = {
  hero: truckImg,
  truck2: truckImg,
  truck3: truckImg,
  truck4: truckImg,
};

const About = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    { icon: <FaHandshake size={28} />, title: 'Personal Touch', desc: 'Every client gets a dedicated point of contact. You\'re never a number — you\'re a partner. We build relationships, not just transactions.', image: TRUCK_IMAGES.truck2 },
    { icon: <FaClock size={28} />, title: 'Responsive Service', desc: 'We answer calls, respond fast, and keep you updated. Communication is our foundation. You\'ll never be left wondering about your shipment status.', image: TRUCK_IMAGES.truck3 },
    { icon: <FaShieldAlt size={28} />, title: 'Reliability First', desc: 'We vet every carrier and hold them to the highest standards of safety and performance. Your freight is in trusted hands every step of the way.', image: TRUCK_IMAGES.truck4 },
    { icon: <FaTruck size={28} />, title: 'Nationwide Reach', desc: 'From Chattanooga to coast-to-coast, our carrier network covers every lane. No matter where your freight needs to go, we can get it there.', image: TRUCK_IMAGES.hero },
  ];

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
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>ABOUT US</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', color: '#fff', margin: '12px 0 16px', lineHeight: '1.1' }}>
              About <span className="text-gradient-gold">Arnold Freight Co.</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
              Based in Chattanooga, Tennessee — providing reliable transportation solutions for businesses across the country since day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== OUR STORY ====== */}
      <section ref={storyRef} style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div style={{ position: 'relative' }}>
                <div className="parallax-img" style={{ height: '500px' }}>
                  <img src={TRUCK_IMAGES.truck2} alt="White freight truck" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={storyInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  style={{
                    position: 'absolute', bottom: '-20px', right: '-10px',
                    background: 'linear-gradient(135deg, #c9a84c, #b8943a)',
                    borderRadius: '16px', padding: '20px 28px', color: '#1a2332',
                    boxShadow: '0 10px 30px rgba(201,168,76,0.3)',
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: '900' }}>100%</div>
                  <div style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>COMMITMENT</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>OUR STORY</span>
              <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 12px' }}>
                A Hands-On Approach to <span className="text-gradient-gold">Freight Logistics</span>
              </h2>
              <div className="gold-line" style={{ marginBottom: '24px' }} />

              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.9', marginBottom: '16px' }}>
                Arnold Freight Co. is a freight and logistics company based in Chattanooga, Tennessee, providing reliable transportation solutions for businesses across the country. We specialize in coordinating shipments efficiently by working closely with both shippers and a trusted network of carriers.
              </p>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.9', marginBottom: '28px' }}>
                While we operate with the capability and professionalism of a full-scale logistics company, we maintain a hands-on, responsive approach. Every client works directly with a dedicated point of contact who understands their shipping needs and ensures each load is handled with precision and care.
              </p>

              <div style={{
                background: '#f9fafb', borderLeft: '4px solid #c9a84c', padding: '24px 28px',
                borderRadius: '0 12px 12px 0',
              }}>
                <FaQuoteLeft style={{ color: '#c9a84c', marginBottom: '8px', fontSize: '20px' }} />
                <p style={{ color: '#374151', fontSize: '17px', fontStyle: 'italic', lineHeight: '1.7', margin: 0, fontWeight: '500' }}>
                  "Our focus is simple — deliver dependable service, maintain clear communication, and move freight efficiently from origin to destination."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section ref={statsRef} style={{
        padding: '60px 24px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${TRUCK_IMAGES.truck4})`,
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
          filter: 'brightness(0.2)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,36,0.85)' }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
            {[
              { icon: <FaAward />, end: 500, suffix: '+', label: 'Loads Delivered' },
              { icon: <FaUsers />, end: 50, suffix: '+', label: 'Happy Clients' },
              { icon: <FaCheckCircle />, end: 98, suffix: '%', label: 'On-Time Rate' },
              { icon: <FaGlobeAmericas />, end: 48, suffix: '', label: 'States Covered' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                style={{ padding: '24px' }}
              >
                <div style={{ color: '#c9a84c', fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{ fontSize: '44px', fontWeight: '900', color: '#c9a84c', fontFamily: 'monospace' }}>
                  {statsInView ? <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} /> : '0'}
                </div>
                <div style={{ fontSize: '13px', color: '#d1d5db', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INTERACTIVE VALUES ====== */}
      <section ref={valuesRef} className="bg-navy" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>OUR VALUES</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', color: '#fff', margin: '10px 0 12px' }}>
              Our <span className="text-gradient-gold">Core Values</span>
            </h2>
            <div className="gold-line" style={{ margin: '0 auto' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            {/* Interactive tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15 }}
                  onClick={() => setActiveValue(i)}
                  style={{
                    padding: '24px', borderRadius: '12px', cursor: 'pointer',
                    background: activeValue === i ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.03)',
                    border: activeValue === i ? '2px solid #c9a84c' : '2px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.4s', display: 'flex', alignItems: 'center', gap: '16px',
                  }}
                >
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '12px',
                    background: activeValue === i ? 'linear-gradient(135deg, #c9a84c, #b8943a)' : 'rgba(201,168,76,0.1)',
                    color: activeValue === i ? '#1a2332' : '#c9a84c',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: 'all 0.4s',
                  }}>
                    {v.icon}
                  </div>
                  <div>
                    <h4 style={{ color: activeValue === i ? '#c9a84c' : '#fff', fontSize: '18px', fontWeight: '700', margin: 0, transition: 'color 0.3s' }}>{v.title}</h4>
                    {activeValue === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        style={{ color: '#9ca3af', fontSize: '14px', margin: '8px 0 0', lineHeight: '1.6' }}
                      >
                        {v.desc}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dynamic image */}
            <motion.div
              key={activeValue}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="parallax-img" style={{ height: '450px' }}>
                <img src={values[activeValue].image} alt={values[activeValue].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section ref={whyRef} style={{ padding: '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800' }}>
              Why Choose <span className="text-gradient-gold">Arnold Freight?</span>
            </h2>
            <div className="gold-line" style={{ margin: '12px auto 0' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              'Direct communication with a dedicated logistics professional',
              'Fast response times and efficient execution',
              'Flexible solutions tailored to your business',
              'Access to a reliable, nationwide carrier network',
              'Precision and care on every single load',
              'Whether it\'s one shipment or ongoing support — we deliver',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: '#c9a84c' }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  padding: '20px 24px', background: '#fff', borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  border: '2px solid #e5e7eb', transition: 'all 0.3s', cursor: 'default',
                }}
              >
                <FaCheckCircle style={{ color: '#c9a84c', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#374151', fontSize: '15px', lineHeight: '1.5' }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="gradient-animate" style={{
        padding: '70px 24px', textAlign: 'center',
        background: 'linear-gradient(135deg, #c9a84c, #d4b96a, #b8943a, #c9a84c)',
        backgroundSize: '200% 200%',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '900', color: '#1a2332', marginBottom: '12px' }}>
            Ready to Partner With Us?
          </h2>
          <p style={{ color: '#374151', fontSize: '17px', marginBottom: '28px' }}>Let's discuss how we can support your freight needs.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: '#1a2332', color: '#fff', padding: '16px 36px', borderRadius: '6px',
              textDecoration: 'none', fontWeight: '700', fontSize: '16px', transition: 'all 0.4s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >Contact Us</Link>
            <a href="tel:4234144982" style={{
              background: 'transparent', color: '#1a2332', padding: '16px 36px', borderRadius: '6px',
              textDecoration: 'none', fontWeight: '700', border: '2px solid #1a2332', display: 'flex', alignItems: 'center', gap: '8px',
              transition: 'all 0.4s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1a2332'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a2332'; }}
            ><FaPhoneAlt /> (423) 414-4982</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
