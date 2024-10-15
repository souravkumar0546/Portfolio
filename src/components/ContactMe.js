import React, { useState } from 'react';

const ContactMe = () => {
  const [step, setStep] = useState(1); // To track the current step in the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  }); // To store form data
  const [thankYouVisible, setThankYouVisible] = useState(false); // To show thank-you message
  const [errors, setErrors] = useState({ name: '', email: '' }); // Track validation errors

  // Handle the change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  // Validate name and email
  const validateFields = () => {
    let valid = true;
    let newErrors = { name: '', email: '' };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name cannot be empty';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle step progression with validation
  const handleNextStep = () => {
    if (step === 1 && !formData.name.trim()) {
      setErrors({ ...errors, name: 'Name cannot be empty' });
    } else if (step === 2 && !validateFields()) {
      return;
    } else {
      setStep(step + 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setThankYouVisible(true);

    // Display thank you message for 5-6 seconds, then reset
    setTimeout(() => {
      setThankYouVisible(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form data
      setStep(1); // Reset to first step
    }, 5000); // 5-second delay
  };

  // Prevent form submission on "Enter" for steps 1 and 2
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && step < 3) {
      e.preventDefault(); // Prevent form submission
      handleNextStep(); // Move to the next step
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>

      {/* Show thank you message temporarily */}
      {thankYouVisible ? (
        <p style={{ fontSize: '1.5rem', fontStyle: 'normal', fontFamily: "'Times New Roman', serif", color: 'rgba(0, 0, 0, 0.8)' }}>
        Thank you for your message! I will get back to you soon.
      </p>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Step 1: First Name Field */}
          {step === 1 && (
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown} // Attach the keydown handler
                  required
                />
                <button
                  type="button"
                  className="arrow-btn"
                  onClick={handleNextStep}
                ></button>
              </div>
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
          )}

          {/* Step 2: Email Field */}
          {step === 2 && (
            <div className="input-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown} // Attach the keydown handler
                  required
                />
                <button
                  type="button"
                  className="arrow-btn"
                  onClick={handleNextStep}
                ></button>
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          )}

          {/* Step 3: Message Field */}
          {step === 3 && (
            <>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </>
          )}
        </form>
      )}
    </section>
  );
};

export default ContactMe;