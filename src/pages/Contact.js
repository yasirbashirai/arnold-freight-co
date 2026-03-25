import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTruck, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import QuoteForm from '../components/QuoteForm';

import warehouseWorkers from '../assets/warehouse-workers.png';
import warehouseTruck from '../assets/warehouse-truck.png';

const TRUCK_IMAGES = {
  hero: warehouseTruck,
  truck2: warehouseWorkers,
};

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mainRef, mainInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    { icon: <FaPhoneAlt size={22} />, label: 'Phone', value: '(423) 414-4982', href: 'tel:4234144982', color: '#10b981' },
    { icon: <FaEnvelope size={22} />, label: 'Email', value: 'info@arnoldfreightco.com', href: 'mailto:info@arnoldfreightco.com', color: '#6366f1' },
    { icon: <FaMapMarkerAlt size={22} />, label: 'Address', value: '200 W. Martin Luther King Blvd, Suite 1000, Chattanooga, TN 37402', href: null, color: '#f59e0b' },
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
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>CONTACT US</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '900', color: '#fff', margin: '12px 0 16px', lineHeight: '1.1' }}>
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
              Have a shipment ready? Need a quote? We're here to help. Reach out and let's move your freight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ====== MAIN CONTACT ====== */}
      <section ref={mainRef} style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={mainInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>REACH OUT</span>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: '800', margin: '10px 0 16px' }}>
                Contact <span className="text-gradient-gold">Arnold Freight Co.</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                We're here to provide solutions for your freight needs. Contact us for a free quote or with any inquiries.
              </p>

              {/* Contact cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={mainInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.15 }}
                    whileHover={{ x: 8, borderColor: '#c9a84c' }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '22px 24px', background: '#f9fafb', borderRadius: '12px',
                      border: '2px solid #e5e7eb', transition: 'all 0.3s', cursor: 'default',
                    }}
                  >
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: `rgba(201,168,76,0.12)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#c9a84c', flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>{info.label}</span>
                      {info.href ? (
                        <a href={info.href} style={{ display: 'block', color: '#1a2332', textDecoration: 'none', fontSize: '17px', fontWeight: '700' }}>{info.value}</a>
                      ) : (
                        <span style={{ display: 'block', color: '#1a2332', fontSize: '17px', fontWeight: '700' }}>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Truck image */}
              <div className="parallax-img" style={{ height: '220px' }}>
                <img src={TRUCK_IMAGES.truck2} alt="Freight truck" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={mainInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <QuoteForm />

              {/* Services list */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={mainInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                style={{
                  marginTop: '24px', padding: '28px', background: '#f9fafb', borderRadius: '16px',
                  border: '1px solid #e5e7eb',
                }}
              >
                <h4 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '16px', marginTop: 0, letterSpacing: '0.5px' }}>Our Services Include:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {['Freight Brokerage', 'Full Truckload (FTL)', 'LTL Shipping', 'Expedited Freight'].map((s, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4, color: '#c9a84c' }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151', cursor: 'default' }}
                    >
                      <FaArrowRight style={{ color: '#c9a84c', fontSize: '10px' }} /> {s}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== WHY CONTACT US ====== */}
      <section className="bg-navy" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: <FaClock size={28} />, title: 'Fast Response', desc: 'We respond quickly and get your freight moving without delay.' },
              { icon: <FaTruck size={28} />, title: 'Reliable Network', desc: 'Access our vetted nationwide carrier network for every shipment.' },
              { icon: <FaCheckCircle size={28} />, title: 'Dedicated Agent', desc: 'Work directly with your personal freight agent every time.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ textAlign: 'center', padding: '40px 28px' }}
              >
                <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0, lineHeight: '1.7' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MAP ====== */}
      <section style={{ height: '400px', position: 'relative' }}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52610.82677799969!2d-85.3436!3d35.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886060459f45f383%3A0x6e1bb935048e6d5b!2sChattanooga%2C%20TN!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          style={{ width: '100%', height: '100%', border: 'none', filter: 'grayscale(30%) contrast(1.1)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Floating info card on map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            position: 'absolute', top: '24px', left: '24px',
            background: '#1a2332', color: '#fff', padding: '24px',
            borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            border: '1px solid rgba(201,168,76,0.2)', maxWidth: '280px',
          }}
        >
          <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#c9a84c', margin: '0 0 12px' }}>Arnold Freight Co.</h4>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 8px', lineHeight: '1.5' }}>
            Chattanooga, Tennessee<br />Serving businesses nationwide
          </p>
          <a href="tel:4234144982" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>
            (423) 414-4982
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
