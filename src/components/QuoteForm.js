import React, { useState } from 'react';

const QuoteForm = ({ darkBg = false }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', shipmentDetails: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', shipmentDetails: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: darkBg ? '#243247' : '#ffffff',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: darkBg ? 'none' : '0 10px 40px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{
        fontSize: '22px', fontWeight: '700', marginBottom: '24px', marginTop: 0,
        color: darkBg ? '#ffffff' : '#1a2332',
      }}>
        Request a Quote
      </h3>

      {submitted && (
        <div style={{
          background: 'rgba(201, 168, 76, 0.15)', border: '1px solid #c9a84c',
          padding: '12px 16px', borderRadius: '4px', marginBottom: '16px',
          color: darkBg ? '#d4b96a' : '#b8943a', fontSize: '14px',
        }}>
          Thank you! We'll get back to you shortly.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: darkBg ? '#d1d5db' : '#374151' }}>
            First Name
          </label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
            className="form-input" required placeholder="John"
            style={darkBg ? { background: '#1a2332', color: '#fff', borderColor: '#374151' } : {}} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: darkBg ? '#d1d5db' : '#374151' }}>
            Last Name
          </label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
            className="form-input" required placeholder="Doe"
            style={darkBg ? { background: '#1a2332', color: '#fff', borderColor: '#374151' } : {}} />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: darkBg ? '#d1d5db' : '#374151' }}>
          Email
        </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}
          className="form-input" required placeholder="john@company.com"
          style={darkBg ? { background: '#1a2332', color: '#fff', borderColor: '#374151' } : {}} />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: darkBg ? '#d1d5db' : '#374151' }}>
          Phone
        </label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
          className="form-input" placeholder="(555) 000-0000"
          style={darkBg ? { background: '#1a2332', color: '#fff', borderColor: '#374151' } : {}} />
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '6px', color: darkBg ? '#d1d5db' : '#374151' }}>
          Shipment Details
        </label>
        <textarea name="shipmentDetails" value={formData.shipmentDetails} onChange={handleChange}
          className="form-input" rows="4"
          placeholder="Tell us about your shipment: origin, destination, type of freight, timeline..."
          style={darkBg ? { background: '#1a2332', color: '#fff', borderColor: '#374151', resize: 'vertical' } : { resize: 'vertical' }} />
      </div>

      <button type="submit" className="btn-gold pulse-gold" style={{ width: '100%', fontSize: '16px', padding: '14px', border: 'none' }}>
        Send Message
      </button>
    </form>
  );
};

export default QuoteForm;
