import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaTruck, FaBoxes, FaRocket, FaUserTie, FaArrowRight, FaPhoneAlt,
  FaCheckCircle, FaChevronDown, FaStar
} from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import QuoteForm from '../components/QuoteForm';

import servicesTruck from '../assets/services-truck.png';
import truckHighway from '../assets/truck-highway.jpg';
import truckSunset from '../assets/truck-sunset.jpg';

const TRUCK_IMAGES = {
  hero: servicesTruck,
  truck2: truckSunset,
  truck3: truckHighway,
};

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: <FaTruck size={36} />,
      title: 'Freight Brokerage',
      desc: 'We coordinate shipments by connecting you with reliable carriers, ensuring cost-effective and efficient transportation from pickup to delivery.',
      features: ['Carrier matching & vetting', 'Rate negotiation', 'Full shipment tracking', 'Documentation management'],
      image: servicesTruck,
    },
    {
      icon: <MdLocalShipping size={36} />,
      title: 'Full Truckload (FTL)',
      desc: 'Ideal for large shipments requiring a full trailer. We provide dedicated capacity and direct routes for faster transit times.',
      features: ['Dedicated trailer space', 'Direct point-to-point routes', 'Faster transit times', 'Heavy freight capable'],
      image: truckHighway,
    },
    {
      icon: <FaBoxes size={36} />,
      title: 'LTL Shipping',
      desc: 'For smaller shipments, LTL allows you to share trailer space while reducing costs without sacrificing reliability.',
      features: ['Cost-effective pricing', 'Shared capacity options', 'Flexible scheduling', 'Partial loads welcome'],
      image: truckSunset,
    },
    {
      icon: <FaRocket size={36} />,
      title: 'Expedited Freight',
      desc: 'When time is critical, we prioritize your shipment to ensure it reaches its destination as quickly as possible.',
      features: ['Priority handling', 'Express routing', 'Real-time GPS updates', 'Time-guaranteed delivery'],
      image: truckHighway,
    },
    {
      icon: <FaUserTie size={36} />,
      title: 'Dedicated Support',
      desc: 'Every client works directly with a freight agent who understands your business and provides ongoing support.',
      features: ['Personal freight agent', 'Proactive communication', 'Custom logistics solutions', 'Long-term partnership'],
      image: servicesTruck,
    },
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
          filter: 'brightness(0.3) contrast(1.1)',
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
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>OUR SERVICES</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', color: '#fff', margin: '12px 0 16px', lineHeight: '1.1' }}>
              Freight Solutions Built Around <span className="text-gradient-gold">Your Business</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 36px' }}>
              Dependable logistics solutions tailored to meet your shipping needs — whether it's a single load or ongoing freight support.
            </p>
            <Link to="/contact" className="btn-gold pulse-ring" style={{ fontSize: '16px', padding: '16px 40px' }}>
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ====== INTERACTIVE SERVICES ACCORDION ====== */}
      <section ref={servicesRef} style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>EXPLORE OUR SERVICES</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 12px' }}>
              Freight Services You Can <span className="text-gradient-gold">Depend On</span>
            </h2>
            <div className="gold-line" style={{ margin: '0 auto' }} />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  border: expandedService === i ? '2px solid #c9a84c' : '2px solid #e5e7eb',
                  borderRadius: '16px', overflow: 'hidden', transition: 'all 0.4s',
                  boxShadow: expandedService === i ? '0 15px 50px rgba(201,168,76,0.15)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                {/* Header - Always visible */}
                <div
                  onClick={() => setExpandedService(expandedService === i ? null : i)}
                  style={{
                    padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '20px',
                    cursor: 'pointer', background: expandedService === i ? 'rgba(201,168,76,0.04)' : '#fff',
                    transition: 'background 0.3s',
                  }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '12px',
                    background: expandedService === i
                      ? 'linear-gradient(135deg, #c9a84c, #b8943a)'
                      : 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
                    color: expandedService === i ? '#1a2332' : '#c9a84c',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: 'all 0.4s',
                  }}>
                    {service.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>{service.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0 0', display: expandedService === i ? 'none' : 'block' }}>
                      {service.desc.substring(0, 80)}...
                    </p>
                  </div>
                  <motion.div animate={{ rotate: expandedService === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <FaChevronDown style={{ color: '#c9a84c', fontSize: '18px' }} />
                  </motion.div>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {expandedService === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 32px 32px',
                        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px',
                      }}>
                        <div>
                          <p style={{ color: '#374151', fontSize: '16px', lineHeight: '1.8', marginTop: 0 }}>{service.desc}</p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {service.features.map((f, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f0f0f0', color: '#374151', fontSize: '15px' }}
                              >
                                <FaCheckCircle style={{ color: '#c9a84c', flexShrink: 0 }} /> {f}
                              </motion.li>
                            ))}
                          </ul>
                          <Link to="/contact" className="btn-gold" style={{ marginTop: '20px', fontSize: '14px', padding: '12px 28px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            Get a Quote <FaArrowRight size={12} />
                          </Link>
                        </div>
                        <div className="parallax-img" style={{ height: '280px' }}>
                          <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FULL-WIDTH TRUCK IMAGE ====== */}
      <section style={{ height: '350px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${TRUCK_IMAGES.truck3})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,36,0.8)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', height: '100%', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              {[
                { num: '500+', label: 'Shipments Completed' },
                { num: '98%', label: 'On-Time Delivery' },
                { num: '50+', label: 'Active Partners' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  style={{ textAlign: 'center', padding: '20px 40px' }}
                >
                  <div style={{ fontSize: '48px', fontWeight: '900', color: '#c9a84c', fontFamily: 'monospace' }}>{stat.num}</div>
                  <div style={{ fontSize: '14px', color: '#d1d5db', fontWeight: '600', letterSpacing: '1px' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section ref={stepsRef} className="bg-navy" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>THE PROCESS</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', color: '#fff', margin: '10px 0 12px' }}>
              Simple. Reliable. <span className="text-gradient-gold">Efficient.</span>
            </h2>
            <div className="gold-line" style={{ margin: '0 auto 60px' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { num: '01', title: 'Request a Quote', desc: 'Provide your shipment details and receive a fast, competitive quote.', icon: <FaPhoneAlt /> },
              { num: '02', title: 'We Secure the Carrier', desc: 'We match your load with a vetted, reliable carrier.', icon: <FaTruck /> },
              { num: '03', title: 'Track & Deliver', desc: 'Stay informed while we ensure safe, on-time delivery.', icon: <FaCheckCircle /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                style={{ padding: '40px 28px', textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '48px', fontWeight: '900', color: 'rgba(201,168,76,0.15)',
                  fontFamily: 'monospace', marginBottom: '-20px', position: 'relative', zIndex: 0,
                }}>{step.num}</div>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #c9a84c, #b8943a)',
                  color: '#1a2332', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '20px', position: 'relative', zIndex: 1,
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== QUOTE ====== */}
      <section ref={quoteRef} style={{ padding: '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>GET STARTED</span>
              <h2 style={{ fontSize: 'clamp(30px, 4vw, 38px)', fontWeight: '800', margin: '10px 0 16px' }}>
                Let's Move <span className="text-gradient-gold">Your Freight</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.8', marginBottom: '28px' }}>
                Have a shipment ready? Contact us today for a fast quote and reliable service you can trust.
              </p>
              <a href="tel:4234144982" style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                color: '#1a2332', fontSize: '22px', fontWeight: '800', textDecoration: 'none', marginBottom: '20px',
              }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #b8943a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a2332' }}>
                  <FaPhoneAlt />
                </div>
                (423) 414-4982
              </a>
              {['Freight Brokerage', 'Truckload Shipping', 'LTL (Less Than Truckload)', 'Expedited Freight'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', color: '#374151', fontSize: '15px' }}>
                  <FaStar style={{ color: '#c9a84c', fontSize: '10px' }} /> {s}
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <QuoteForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
