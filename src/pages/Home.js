import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaHandshake, FaClock, FaShieldAlt, FaQuoteLeft, FaPhoneAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import QuoteForm from '../components/QuoteForm';

/* Intersection Observer hook for scroll animations */
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

/* Animated counter */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Home = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [servicesRef, servicesInView] = useInView();
  const [whyRef, whyInView] = useInView();
  const [stepsRef, stepsInView] = useInView();
  const [quoteRef, quoteInView] = useInView();

  const services = [
    { icon: <FaTruck size={32} />, title: 'Freight Brokerage', desc: 'Efficiently match shippers with carriers to ensure on-time delivery and cost-effective solutions.' },
    { icon: <MdLocalShipping size={32} />, title: 'Truckload Shipping', desc: 'Full truckload shipping services for nationwide and regional deliveries.' },
    { icon: <FaTruck size={32} style={{ transform: 'scaleX(-1)' }} />, title: 'LTL Shipping', desc: 'Cost-effective less than truckload services for smaller shipments.' },
    { icon: <FaClock size={32} />, title: 'Expedited Freight', desc: 'Urgent transport solutions for time-sensitive and critical shipments.' },
  ];

  const steps = [
    { num: '1', title: 'Request a Quote', desc: 'Provide your shipment details and receive a fast, competitive quote.' },
    { num: '2', title: 'We Secure the Right Carrier', desc: 'We match your load with a vetted, reliable carrier from our network.' },
    { num: '3', title: 'Track & Deliver', desc: 'Stay informed while we ensure safe, on-time delivery.' },
  ];

  return (
    <div>
      {/* ====== HERO SECTION ====== */}
      <section ref={heroRef} style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative',
        background: 'linear-gradient(135deg, #0f1724 0%, #1a2332 100%)',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.3,
        }} />
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 80px', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', maxWidth: '650px' }}>
            <div className={heroInView ? 'animate-slide-left' : ''} style={{ opacity: heroInView ? 1 : 0 }}>
              <div style={{ display: 'inline-block', background: 'rgba(201, 168, 76, 0.15)', border: '1px solid rgba(201, 168, 76, 0.3)', borderRadius: '24px', padding: '6px 16px', marginBottom: '20px' }}>
                <span style={{ color: '#c9a84c', fontSize: '13px', fontWeight: '600' }}>CHATTANOOGA, TN — NATIONWIDE SERVICE</span>
              </div>
              <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.15', margin: '0 0 20px' }}>
                Reliable Freight &<br />
                <span className="text-gradient-gold">Logistics Solutions</span>
              </h1>
              <p style={{ fontSize: '18px', color: '#d1d5db', lineHeight: '1.7', marginBottom: '32px', maxWidth: '500px' }}>
                Trusted transportation and shipping services that get your goods where they need to be — on time, every time.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-gold pulse-gold" style={{ fontSize: '16px', padding: '14px 32px' }}>
                  Get a Quote
                </Link>
                <a href="tel:5551234567" className="btn-outline-gold" style={{ fontSize: '16px', padding: '14px 32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaPhoneAlt /> (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <div style={{ width: '24px', height: '40px', border: '2px solid rgba(201,168,76,0.5)', borderRadius: '12px', margin: '0 auto 8px', position: 'relative' }}>
            <div style={{ width: '4px', height: '8px', background: '#c9a84c', borderRadius: '2px', position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', animation: 'fadeInUp 1.5s ease infinite' }} />
          </div>
        </div>
      </section>

      {/* ====== TRUST STRIP ====== */}
      <section className="bg-navy-dark" style={{ padding: '0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', textAlign: 'center' }}>
          {[
            { num: 500, suffix: '+', label: 'Loads Delivered' },
            { num: 50, suffix: '+', label: 'Active Clients' },
            { num: 98, suffix: '%', label: 'On-Time Rate' },
            { num: 24, suffix: '/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '30px 20px', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: '#c9a84c', marginBottom: '4px' }}>
                <Counter end={stat.num} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== SERVICES SECTION ====== */}
      <section ref={servicesRef} style={{ padding: '80px 24px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '8px' }}>Freight Agent Services</h2>
          <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '12px' }}>Your trusted partner for comprehensive freight management</p>
          <div className="gold-divider" style={{ marginBottom: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {services.map((s, i) => (
              <div key={i} className={`service-card ${servicesInView ? 'animate-fade-in-up' : ''}`}
                style={{
                  padding: '36px 24px', borderRadius: '8px', background: '#fff', textAlign: 'center',
                  opacity: servicesInView ? 1 : 0, animationDelay: `${i * 0.15}s`,
                }}>
                <div style={{ color: '#c9a84c', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{s.desc}</p>
                <Link to="/services" className="btn-outline-gold" style={{ fontSize: '13px', padding: '8px 20px' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section ref={whyRef} className="bg-navy" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className={whyInView ? 'animate-slide-left' : ''} style={{ opacity: whyInView ? 1 : 0 }}>
              <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
                Why Work With <span className="text-gradient-gold">Arnold Freight?</span>
              </h2>
              <div className="gold-divider" style={{ margin: '16px 0 24px' }} />
              <p style={{ color: '#d1d5db', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                While we operate with the capability and professionalism of a full-scale logistics company, we maintain a hands-on, responsive approach. Every client works directly with a dedicated point of contact.
              </p>
              {[
                { icon: <FaHandshake />, title: 'Direct Communication', desc: 'Work directly with a dedicated logistics professional who knows your business.' },
                { icon: <FaClock />, title: 'Fast Response Times', desc: 'Efficient execution and quick turnaround on every request.' },
                { icon: <FaShieldAlt />, title: 'Reliable Network', desc: 'Access to a vetted, nationwide carrier network you can trust.' },
                { icon: <FaTruck />, title: 'Flexible Solutions', desc: 'Tailored logistics solutions designed around your business needs.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(201,168,76,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '0 0 4px' }}>{item.title}</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={whyInView ? 'animate-slide-right' : ''} style={{ opacity: whyInView ? 1 : 0 }}>
              <div style={{
                borderRadius: '12px', overflow: 'hidden', position: 'relative',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
                  alt="Freight truck on highway"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(15,23,36,0.9))', padding: '40px 24px 24px' }}>
                  <FaQuoteLeft style={{ color: '#c9a84c', fontSize: '24px', marginBottom: '12px' }} />
                  <p style={{ color: '#ffffff', fontSize: '16px', fontStyle: 'italic', lineHeight: '1.6', margin: 0 }}>
                    "Our focus is simple — deliver dependable service, maintain clear communication, and move freight efficiently."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== HOW IT WORKS ====== */}
      <section ref={stepsRef} style={{ padding: '80px 24px', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '8px' }}>Simple. Reliable. Efficient.</h2>
          <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '12px' }}>Getting your freight moving is easy</p>
          <div className="gold-divider" style={{ marginBottom: '48px' }} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {steps.map((step, i) => (
              <div key={i} className={stepsInView ? 'animate-fade-in-up' : ''}
                style={{
                  padding: '40px 24px', background: '#ffffff', borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  opacity: stepsInView ? 1 : 0, animationDelay: `${i * 0.2}s`,
                  position: 'relative',
                }}>
                <div className="step-circle">{step.num}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                {i < 2 && (
                  <FaArrowRight style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', color: '#c9a84c', fontSize: '20px', display: 'none' }} className="hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== QUOTE / CONTACT SECTION ====== */}
      <section ref={quoteRef} style={{ padding: '80px 24px', background: '#f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            {/* Left side */}
            <div className={quoteInView ? 'animate-slide-left' : ''} style={{ opacity: quoteInView ? 1 : 0 }}>
              <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
                Get a Quote or <span className="text-gradient-gold">Ask About Services</span>
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px' }}>
                We're here to provide solutions for your freight needs. Contact us for a free quote or with any inquiries.
              </p>

              <div style={{
                borderRadius: '12px', overflow: 'hidden', marginBottom: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&q=80"
                  alt="Customer service agent"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:5551234567" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#1a2332', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}>
                  <FaPhoneAlt style={{ color: '#c9a84c' }} /> (555) 123-4567
                </a>
                <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
                  <span className="text-gold" style={{ fontWeight: '600' }}>DOT #1234567</span> | <span className="text-gold" style={{ fontWeight: '600' }}>MC #7854321</span>
                </p>
              </div>
            </div>

            {/* Right side - Quote form */}
            <div className={quoteInView ? 'animate-slide-right' : ''} style={{ opacity: quoteInView ? 1 : 0 }}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="bg-gold" style={{ padding: '50px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '700', color: '#1a2332', marginBottom: '12px' }}>
            Ready to Move Your Freight?
          </h2>
          <p style={{ color: '#374151', fontSize: '16px', marginBottom: '24px' }}>
            Contact us today for reliable, efficient freight solutions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              background: '#1a2332', color: '#ffffff', padding: '14px 32px',
              borderRadius: '4px', textDecoration: 'none', fontWeight: '600',
              transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <FaCheckCircle /> Get Started Today
            </Link>
            <a href="tel:5551234567" style={{
              background: 'transparent', color: '#1a2332', padding: '14px 32px',
              borderRadius: '4px', textDecoration: 'none', fontWeight: '600',
              border: '2px solid #1a2332', transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
