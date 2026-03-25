import React, { useEffect, useRef, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTruck, FaClock, FaCheckCircle } from 'react-icons/fa';
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

const Contact = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [mainRef, mainInView] = useInView();

  const contactInfo = [
    { icon: <FaPhoneAlt size={20} />, label: 'Phone', value: '(555) 123-4567', href: 'tel:5551234567' },
    { icon: <FaEnvelope size={20} />, label: 'Email', value: 'info@arnoldfreight.com', href: 'mailto:info@arnoldfreight.com' },
    { icon: <FaMapMarkerAlt size={20} />, label: 'Address', value: '1234 Logistics Lane, City, State, 12345', href: null },
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15,
        }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className={heroInView ? 'animate-fade-in-up' : ''} style={{ opacity: heroInView ? 1 : 0 }}>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '800', color: '#ffffff', marginBottom: '16px' }}>
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              Have a shipment ready? Need a quote? We're here to help. Reach out and let's move your freight.
            </p>
          </div>
        </div>
      </section>

      {/* ====== MAIN CONTACT SECTION ====== */}
      <section ref={mainRef} style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {/* Left Column - Contact Info */}
            <div className={mainInView ? 'animate-slide-left' : ''} style={{ opacity: mainInView ? 1 : 0 }}>
              <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>
                Contact <span className="text-gradient-gold">Arnold Freight Co.</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                We're here to provide solutions for your freight needs. Contact us for a free quote or with any inquiries.
              </p>

              {/* Contact cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {contactInfo.map((info, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '20px', background: '#f9fafb', borderRadius: '8px',
                    border: '1px solid #e5e7eb', transition: 'all 0.3s',
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#c9a84c'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(201,168,76,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: '13px', color: '#9ca3af', fontWeight: '600', display: 'block' }}>{info.label}</span>
                      {info.href ? (
                        <a href={info.href} style={{ color: '#1a2332', textDecoration: 'none', fontSize: '16px', fontWeight: '600' }}>{info.value}</a>
                      ) : (
                        <span style={{ color: '#1a2332', fontSize: '16px', fontWeight: '600' }}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* DOT & MC */}
              <div style={{
                display: 'flex', gap: '24px', padding: '20px', background: '#1a2332',
                borderRadius: '8px', flexWrap: 'wrap',
              }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block' }}>DOT Number</span>
                  <span style={{ color: '#c9a84c', fontSize: '18px', fontWeight: '700' }}>#1234567</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(201,168,76,0.3)' }} />
                <div>
                  <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block' }}>MC Number</span>
                  <span style={{ color: '#c9a84c', fontSize: '18px', fontWeight: '700' }}>#7854321</span>
                </div>
              </div>

              {/* Image */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginTop: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&q=80"
                  alt="Customer service"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className={mainInView ? 'animate-slide-right' : ''} style={{ opacity: mainInView ? 1 : 0 }}>
              <QuoteForm />

              {/* Quick info below form */}
              <div style={{ marginTop: '24px', padding: '24px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', marginTop: 0 }}>Our Services Include:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {['Freight Brokerage', 'Full Truckload (FTL)', 'LTL Shipping', 'Expedited Freight'].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151' }}>
                      <FaCheckCircle style={{ color: '#c9a84c', flexShrink: 0, fontSize: '12px' }} /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHY CONTACT US ====== */}
      <section className="bg-navy" style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: <FaClock size={24} />, title: 'Fast Response', desc: 'We respond quickly and get your freight moving without delay.' },
              { icon: <FaTruck size={24} />, title: 'Reliable Network', desc: 'Access our vetted nationwide carrier network for every shipment.' },
              { icon: <FaCheckCircle size={24} />, title: 'Dedicated Agent', desc: 'Work directly with your personal freight agent every time.' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MAP PLACEHOLDER ====== */}
      <section style={{ height: '400px', background: '#e5e7eb', position: 'relative' }}>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52610.82677799969!2d-85.3436!3d35.0456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886060459f45f383%3A0x6e1bb935048e6d5b!2sChattanooga%2C%20TN!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;
