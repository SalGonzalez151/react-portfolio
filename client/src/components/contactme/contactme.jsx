import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';


function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: '', // Clear the error when the user types something
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your form validation
    let validForm = true;

    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`,
        }));
        validForm = false;
      }
    });

    if (validForm) {
      // Add logic to handle form submission, e.g., send data to server
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
      <p>Thank you for considering reaching out. Your communication is important to me, and I am eager to hear from you. Whether you have inquiries about my services, want to discuss potential collaborations, or simply wish to connect, this platform is designed to facilitate a seamless interaction. Please feel free to fill out the form below with your details, and I will make it a priority to respond promptly. Your information is treated with the utmost confidentiality, and I appreciate the opportunity to engage with you professionally. Looking forward to connecting soon.</p>

      <form>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${formErrors.email && 'is-invalid'}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${formErrors.message && 'is-invalid'}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactMe;