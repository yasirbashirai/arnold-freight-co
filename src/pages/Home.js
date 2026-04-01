import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { TypeAnimation } from 'react-type-animation';
import {
  FaTruck, FaHandshake, FaClock, FaShieldAlt, FaPhoneAlt, FaArrowRight,
  FaCheckCircle, FaQuoteLeft, FaBoxes, FaRocket, FaStar
} from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import QuoteForm from '../components/QuoteForm';

/* Local truck image */
import truckImg from '../assets/truck-highway.jpg';

const TRUCK_IMAGES = {
  hero: truckImg,
  truck2: truckImg,
  truck3: truckImg,
  truck4: truckImg,
  truck5: truckImg,
};

const Home = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [quoteRef, quoteInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [marqueeRef] = useInView({ triggerOnce: true });

  const services = [
    { icon: <FaTruck size={30} />, title: 'Freight Brokerage', desc: 'Efficiently match shippers with carriers to ensure on-time delivery and cost-effective solutions.' },
    { icon: <MdLocalShipping size={30} />, title: 'Truckload Shipping', desc: 'Full truckload shipping services for nationwide and regional deliveries.' },
    { icon: <FaBoxes size={30} />, title: 'LTL Shipping', desc: 'Cost-effective less than truckload services for smaller shipments.' },
    { icon: <FaRocket size={30} />, title: 'Expedited Freight', desc: 'Urgent transport solutions for time-sensitive and critical shipments.' },
  ];

  const stats = [
    { end: 500, suffix: '+', label: 'Loads Delivered', icon: <FaTruck /> },
    { end: 50, suffix: '+', label: 'Active Clients', icon: <FaHandshake /> },
    { end: 98, suffix: '%', label: 'On-Time Rate', icon: <FaCheckCircle /> },
    { end: 24, suffix: '/7', label: 'Support Available', icon: <FaClock /> },
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ====== HERO — Matching design: text left, truck right ====== */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative',
        background: '#0f1724', overflow: 'hidden',
      }}>
        {/* Full background truck image */}
        <motion.div
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${TRUCK_IMAGES.hero})`,
            backgroundSize: 'cover', backgroundPosition: 'center right',
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Left-to-right gradient overlay: solid navy on left, transparent on right to reveal truck */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(15,23,36,0.97) 0%, rgba(15,23,36,0.92) 30%, rgba(15,23,36,0.7) 55%, rgba(15,23,36,0.3) 75%, rgba(15,23,36,0.1) 100%)',
        }} />

        {/* Top navy strip — matching the design */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '80px',
          background: 'linear-gradient(to bottom, rgba(15,23,36,1), rgba(15,23,36,0.8), transparent)',
          zIndex: 2,
        }} />

        {/* Bottom gradient fade to white */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.05), rgba(255,255,255,0.15))',
          zIndex: 2,
        }} />

        {/* Subtle floating particles on the left side */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="particle" style={{
            width: `${15 + i * 10}px`, height: `${15 + i * 10}px`,
            left: `${5 + i * 8}%`, top: `${20 + i * 15}%`,
            animation: `${i % 2 === 0 ? 'float' : 'floatReverse'} ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }} />
        ))}

        {/* Hero content — left aligned */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '140px 24px 100px', position: 'relative', zIndex: 3, width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: 'clamp(42px, 5.5vw, 68px)', fontWeight: '900',
                color: '#ffffff', lineHeight: '1.1', margin: '0 0 10px',
              }}
            >
              Reliable Freight &
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(42px, 5.5vw, 68px)', fontWeight: '900',
                lineHeight: '1.1', marginBottom: '24px', minHeight: '80px',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Logistics Solutions', 2000,
                  'Shipping Partners', 2000,
                  'Freight Services', 2000,
                  'Transport Experts', 2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="text-gradient-gold"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: '18px', color: '#d1d5db', lineHeight: '1.8',
                marginBottom: '40px', maxWidth: '480px',
              }}
            >
              Trusted transportation and shipping services that get your goods where they need to be — on time, every time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <Link to="/contact" className="btn-gold pulse-ring" style={{ fontSize: '16px', padding: '16px 40px' }}>
                Get a Quote
              </Link>
              <a href="tel:4234144982" className="btn-outline-gold" style={{
                fontSize: '16px', padding: '16px 36px', display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <FaPhoneAlt /> (423) 414-4982
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}
        >
          <div style={{ width: '28px', height: '44px', border: '2px solid rgba(201,168,76,0.5)', borderRadius: '14px', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}>
            <motion.div
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              style={{ width: '4px', height: '10px', background: '#c9a84c', borderRadius: '2px' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ====== STATS STRIP ====== */}
      <section ref={statsRef} className="bg-navy-dark" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(201,168,76,0.03), transparent, rgba(201,168,76,0.03))' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', position: 'relative' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{
                padding: '36px 20px', textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                position: 'relative',
              }}
            >
              <div style={{ color: 'rgba(201,168,76,0.3)', fontSize: '20px', marginBottom: '8px' }}>{stat.icon}</div>
              <div style={{ fontSize: '42px', fontWeight: '900', color: '#c9a84c', marginBottom: '4px', fontFamily: 'monospace' }}>
                {statsInView ? <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <div style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== MARQUEE TRUST STRIP ====== */}
      <section ref={marqueeRef} style={{ background: '#c9a84c', padding: '14px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...Array(3)].map((_, j) => (
            <div key={j} style={{ display: 'flex', gap: '50px', paddingRight: '50px' }}>
              {['Nationwide Coverage', 'On-Time Delivery', 'Vetted Carriers', 'Dedicated Support', '24/7 Availability', 'Competitive Rates', 'Real-Time Tracking', 'Custom Solutions'].map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
                  <FaStar style={{ color: '#1a2332', fontSize: '10px' }} />
                  <span style={{ color: '#1a2332', fontWeight: '700', fontSize: '14px', letterSpacing: '0.5px' }}>{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section ref={servicesRef} style={{ padding: '100px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>WHAT WE OFFER</span>
            <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 12px' }}>Freight Agent Services</h2>
            <p style={{ color: '#6b7280', fontSize: '17px', maxWidth: '550px', margin: '0 auto 16px' }}>Your trusted partner for comprehensive freight management</p>
            <div className="gold-line" style={{ margin: '0 auto' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="service-card-3d"
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="service-card-inner" style={{ textAlign: 'center' }}>
                  <div className="icon-float">{s.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>{s.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>{s.desc}</p>
                  <Link to="/services" style={{
                    color: '#c9a84c', textDecoration: 'none', fontSize: '14px', fontWeight: '700',
                    display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'gap 0.3s',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                    onMouseLeave={(e) => e.currentTarget.style.gap = '6px'}
                  >
                    Learn More <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FULL-WIDTH TRUCK IMAGE PARALLAX ====== */}
      <section style={{ height: '400px', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          style={{
            position: 'absolute', inset: '-10%',
            backgroundImage: `url(${TRUCK_IMAGES.truck3})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,36,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', padding: '0 24px' }}
          >
            <FaQuoteLeft style={{ color: '#c9a84c', fontSize: '36px', marginBottom: '20px' }} />
            <p style={{ color: '#ffffff', fontSize: 'clamp(20px, 3vw, 30px)', fontWeight: '600', lineHeight: '1.5', maxWidth: '800px', fontStyle: 'italic' }}>
              "Our focus is simple — deliver dependable service, maintain clear communication, and move freight efficiently from origin to destination."
            </p>
            <div className="gold-line" style={{ margin: '24px auto 0' }} />
          </motion.div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section ref={whyRef} className="bg-navy" style={{ padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        {/* Background pattern */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(201,168,76,0.03)', transform: 'translate(50%, -50%)' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>WHY CHOOSE US</span>
              <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', color: '#fff', margin: '10px 0 16px' }}>
                Why Work With <span className="text-gradient-gold">Arnold Freight?</span>
              </h2>
              <div className="gold-line" style={{ marginBottom: '24px' }} />
              <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.8', marginBottom: '36px' }}>
                We maintain a hands-on, responsive approach. Every client works directly with a dedicated point of contact who understands their shipping needs.
              </p>

              {[
                { icon: <FaHandshake />, title: 'Direct Communication', desc: 'Work directly with a dedicated logistics professional who knows your business.' },
                { icon: <FaClock />, title: 'Fast Response Times', desc: 'Efficient execution and quick turnaround on every request.' },
                { icon: <FaShieldAlt />, title: 'Reliable Network', desc: 'Access to a vetted, nationwide carrier network you can trust.' },
                { icon: <FaTruck />, title: 'Flexible Solutions', desc: 'Tailored logistics solutions designed around your business needs.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={whyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  style={{
                    display: 'flex', gap: '16px', marginBottom: '20px', padding: '16px',
                    borderRadius: '12px', transition: 'background 0.3s',
                    cursor: 'default',
                  }}
                  whileHover={{ backgroundColor: 'rgba(201,168,76,0.08)', x: 5 }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ color: '#fff', fontSize: '16px', fontWeight: '700', margin: '0 0 4px' }}>{item.title}</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="parallax-img" style={{ height: '550px', borderRadius: '20px' }}>
                <img src={TRUCK_IMAGES.truck2} alt="Freight truck" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS — TIMELINE ====== */}
      <section ref={stepsRef} style={{ padding: '100px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={stepsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="parallax-img" style={{ height: '500px' }}>
                <img src={TRUCK_IMAGES.truck5} alt="Semi truck on highway" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

            {/* Steps side */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>HOW IT WORKS</span>
                <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 12px' }}>
                  Simple. Reliable. <span className="text-gradient-gold">Efficient.</span>
                </h2>
                <div className="gold-line" style={{ marginBottom: '40px' }} />
              </motion.div>

              {[
                { num: '1', title: 'Request a Quote', desc: 'Provide your shipment details and receive a fast, competitive quote tailored to your needs.' },
                { num: '2', title: 'We Secure the Right Carrier', desc: 'We match your load with a vetted, reliable carrier from our nationwide network.' },
                { num: '3', title: 'Track & Deliver', desc: 'Stay informed with real-time updates while we ensure safe, on-time delivery.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="timeline-step"
                  initial={{ opacity: 0, x: 30 }}
                  animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                >
                  <div className="timeline-number">{step.num}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', marginTop: 0 }}>{step.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== QUOTE SECTION ====== */}
      <section ref={quoteRef} style={{ padding: '100px 24px', background: '#f0f0f0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '700', letterSpacing: '2px' }}>CONTACT US</span>
              <h2 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: '800', margin: '10px 0 16px' }}>
                Get a Quote or <span className="text-gradient-gold">Ask About Services</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
                We're here to provide solutions for your freight needs. Contact us for a free quote or with any inquiries.
              </p>

              <div className="parallax-img" style={{ height: '280px', marginBottom: '24px' }}>
                <img src={TRUCK_IMAGES.truck4} alt="Freight truck" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:4234144982" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1a2332', textDecoration: 'none', fontSize: '22px', fontWeight: '800' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #c9a84c, #b8943a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a2332' }}>
                    <FaPhoneAlt />
                  </div>
                  (423) 414-4982
                </a>
              </div>
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

      {/* ====== CTA BANNER ====== */}
      <section className="gradient-animate" style={{
        padding: '70px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #c9a84c, #d4b96a, #b8943a, #c9a84c)',
        backgroundSize: '200% 200%',
      }}>
        {/* Truck pattern */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          {[...Array(5)].map((_, i) => (
            <FaTruck key={i} style={{ position: 'absolute', fontSize: '100px', left: `${i * 25}%`, top: '20%', transform: `rotate(${-5 + i * 3}deg)` }} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '900', color: '#1a2332', marginBottom: '12px' }}>
            Ready to Move Your Freight?
          </h2>
          <p style={{ color: '#374151', fontSize: '17px', marginBottom: '28px' }}>
            Contact us today for reliable, efficient freight solutions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: '#1a2332', color: '#ffffff', padding: '16px 36px',
              borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '16px',
              transition: 'all 0.4s', display: 'flex', alignItems: 'center', gap: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; }}
            >
              <FaCheckCircle /> Get Started Today
            </Link>
            <a href="tel:4234144982" style={{
              background: 'transparent', color: '#1a2332', padding: '16px 36px',
              borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '16px',
              border: '2px solid #1a2332', transition: 'all 0.4s',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1a2332'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a2332'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
