import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const QuoteForm = ({ darkBg = false }) => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', shipmentDetails: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', shipmentDetails: '' });
  };

  const inputStyle = darkBg
    ? { background: 'rgba(15,23,36,0.8)', color: '#fff', borderColor: 'rgba(201,168,76,0.2)' }
    : {};

  const labelStyle = {
    display: 'block', fontSize: '13px', fontWeight: '700',
    marginBottom: '8px', color: darkBg ? '#d1d5db' : '#374151',
    letterSpacing: '0.5px', textTransform: 'uppercase',
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: darkBg ? 'rgba(36, 50, 71, 0.9)' : '#ffffff',
        padding: '36px',
        borderRadius: '16px',
        boxShadow: darkBg ? '0 20px 60px rgba(0,0,0,0.3)' : '0 20px 60px rgba(0,0,0,0.08)',
        border: darkBg ? '1px solid rgba(201,168,76,0.15)' : '1px solid #e5e7eb',
        backdropFilter: darkBg ? 'blur(20px)' : 'none',
      }}
    >
      <h3 style={{
        fontSize: '24px', fontWeight: '800', marginBottom: '8px', marginTop: 0,
        color: darkBg ? '#ffffff' : '#1a2332',
      }}>
        Request a Quote
      </h3>
      <div className="gold-line" style={{ marginBottom: '28px' }} />

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              background: 'rgba(201, 168, 76, 0.12)', border: '2px solid rgba(201,168,76,0.3)',
              padding: '16px', borderRadius: '12px', marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '12px',
              color: darkBg ? '#d4b96a' : '#b8943a', fontSize: '15px',
            }}
          >
            <FaCheckCircle size={20} /> Thank you! We'll get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        {[
          { name: 'firstName', label: 'First Name', placeholder: 'John', type: 'text' },
          { name: 'lastName', label: 'Last Name', placeholder: 'Doe', type: 'text' },
        ].map((field) => (
          <motion.div key={field.name} animate={{ scale: focusedField === field.name ? 1.02 : 1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <label style={labelStyle}>{field.label}</label>
            <input
              type={field.type} name={field.name} value={formData[field.name]}
              onChange={handleChange} onFocus={() => setFocusedField(field.name)} onBlur={() => setFocusedField(null)}
              className="form-input" required placeholder={field.placeholder}
              style={inputStyle}
            />
          </motion.div>
        ))}
      </div>

      {[
        { name: 'email', label: 'Email', placeholder: 'john@company.com', type: 'email' },
        { name: 'phone', label: 'Phone', placeholder: '(555) 000-0000', type: 'tel' },
      ].map((field) => (
        <motion.div key={field.name} style={{ marginBottom: '16px' }} animate={{ scale: focusedField === field.name ? 1.02 : 1 }} transition={{ type: 'spring', stiffness: 300 }}>
          <label style={labelStyle}>{field.label}</label>
          <input
            type={field.type} name={field.name} value={formData[field.name]}
            onChange={handleChange} onFocus={() => setFocusedField(field.name)} onBlur={() => setFocusedField(null)}
            className="form-input" placeholder={field.placeholder}
            style={inputStyle}
          />
        </motion.div>
      ))}

      <motion.div style={{ marginBottom: '28px' }} animate={{ scale: focusedField === 'shipmentDetails' ? 1.02 : 1 }} transition={{ type: 'spring', stiffness: 300 }}>
        <label style={labelStyle}>Shipment Details</label>
        <textarea
          name="shipmentDetails" value={formData.shipmentDetails}
          onChange={handleChange} onFocus={() => setFocusedField('shipmentDetails')} onBlur={() => setFocusedField(null)}
          className="form-input" rows="4"
          placeholder="Origin, destination, freight type, timeline..."
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </motion.div>

      <motion.button
        type="submit"
        className="btn-gold"
        style={{ width: '100%', fontSize: '16px', padding: '16px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaPaperPlane /> Send Message
      </motion.button>
    </motion.form>
  );
};

export default QuoteForm;
