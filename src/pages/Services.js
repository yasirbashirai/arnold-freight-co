import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaBoxes, FaRocket, FaUserTie, FaArrowRight, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import QuoteForm from '../components/QuoteForm';

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Services = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [servicesRef, servicesInView] = useInView();
  const [stepsRef, stepsInView] = useInView();
  const [quoteRef, quoteInView] = useInView();

  const services = [
    {
      icon: <FaTruck size={40} />,
      title: 'Freight Brokerage',
      desc: 'We coordinate shipments by connecting you with reliable carriers, ensuring cost-effective and efficient transportation from pickup to delivery.',
      features: ['Carrier matching', 'Rate negotiation', 'Shipment tracking', 'Documentation management'],
    },
    {
      icon: <MdLocalShipping size={40} />,
      title: 'Full Truckload (FTL)',
      desc: 'Ideal for large shipments requiring a full trailer. We provide dedicated capacity and direct routes for faster transit times.',
      features: ['Dedicated trailer', 'Direct routes', 'Faster transit', 'Heavy freight capable'],
    },
    {
      icon: <FaBoxes size={40} />,
      title: 'LTL Shipping',
      desc: 'For smaller shipments, LTL allows you to share trailer space while reducing costs without sacrificing reliability.',
      features: ['Cost-effective', 'Shared capacity', 'Flexible scheduling', 'Partial loads welcome'],
    },
    {
      icon: <FaRocket size={40} />,
      title: 'Expedited Freight',
      desc: 'When time is critical, we prioritize your shipment to ensure it reaches its destination as quickly as possible.',
      features: ['Priority handling', 'Express routes', 'Real-time updates', 'Time-guaranteed delivery'],
    },
    {
      icon: <FaUserTie size={40} />,
      title: 'Dedicated Support',
      desc: 'Every client works directly with a freight agent who understands your business and provides ongoing support.',
      features: ['Personal freight agent', 'Proactive communication', 'Custom solutions', 'Ongoing partnership'],
    },
  ];

  const steps = [
    { num: '1', title: 'Request a Quote', desc: 'Provide your shipment details and receive a fast, competitive quote.' },
    { num: '2', title: 'We Secure the Right Carrier', desc: 'We match your load with a vetted, reliable carrier.' },
    { num: '3', title: 'Track & Deliver', desc: 'Stay informed while we ensure safe, on-time delivery.' },
  ];

  return (
    <div>
      {/* ====== HERO ====== */}
      <section ref={heroRef} style={{
        paddingTop: '140px', paddingBottom: '80px',
        background: 'linear-gradient(135deg, #0f1724 0%, #1a2332 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15,
        }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className={heroInView ? 'animate-fade-in-up' : ''} style={{ opacity: heroInView ? 1 : 0 }}>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Freight Solutions Built<br />Around <span className="text-gradient-gold">Your Business</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 32px' }}>
              Arnold Freight Co. provides dependable logistics solutions tailored to meet your shipping needs — whether it's a single load or ongoing freight support.
            </p>
            <Link to="/contact" className="btn-gold pulse-gold" style={{ fontSize: '16px' }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SERVICES LIST ====== */}
      <section ref={servicesRef} style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '8px' }}>Freight Services You Can Depend On</h2>
            <div className="gold-divider" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {services.map((service, i) => (
              <div
                key={i}
                className={servicesInView ? 'animate-fade-in-up' : ''}
                style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px', alignItems: 'center', padding: '40px',
                  background: i % 2 === 0 ? '#f9fafb' : '#ffffff',
                  borderRadius: '12px', border: '1px solid #e5e7eb',
                  opacity: servicesInView ? 1 : 0, animationDelay: `${i * 0.1}s`,
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <div>
                  <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{service.icon}</div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>{service.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.7', margin: 0 }}>{service.desc}</p>
                </div>
                <div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f0f0f0', color: '#374151', fontSize: '15px' }}>
                        <FaCheckCircle style={{ color: '#c9a84c', flexShrink: 0 }} /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section ref={stepsRef} className="bg-navy" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
            Simple. Reliable. <span className="text-gradient-gold">Efficient.</span>
          </h2>
          <div className="gold-divider" style={{ marginBottom: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {steps.map((step, i) => (
              <div key={i} className={stepsInView ? 'animate-fade-in-up' : ''}
                style={{
                  padding: '40px 24px', background: 'rgba(255,255,255,0.05)',
                  borderRadius: '8px', border: '1px solid rgba(201,168,76,0.2)',
                  opacity: stepsInView ? 1 : 0, animationDelay: `${i * 0.2}s`,
                }}>
                <div className="step-circle">{step.num}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== QUOTE SECTION ====== */}
      <section ref={quoteRef} style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div className={quoteInView ? 'animate-slide-left' : ''} style={{ opacity: quoteInView ? 1 : 0 }}>
              <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
                Let's Move <span className="text-gradient-gold">Your Freight</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                Have a shipment ready? Contact us today for a fast quote and reliable service you can trust.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:5551234567" style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: '#1a2332', fontSize: '20px', fontWeight: '700', textDecoration: 'none',
                }}>
                  <FaPhoneAlt style={{ color: '#c9a84c' }} /> (555) 123-4567
                </a>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0' }}>
                {['Freight Brokerage', 'Truckload Shipping', 'LTL (Less Than Truckload)', 'Expedited Freight'].map((s, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', color: '#374151', fontSize: '15px' }}>
                    <FaArrowRight style={{ color: '#c9a84c', fontSize: '12px' }} /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className={quoteInView ? 'animate-slide-right' : ''} style={{ opacity: quoteInView ? 1 : 0 }}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
