import React, { useState } from 'react';
import type { ContactPageProps, ContactForm } from '../types';

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ 
  onSubmit, 
  onBackToProfile, 
  pageNumber 
}) => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      
      try {
        await onSubmit(formData);
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <h1 className="title">Contact Me!</h1>

      <div className="contact-box">
        <form onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <input
              type="text"
              name="fullName"
              className={`field ${errors.fullName ? 'field-error' : ''}`}
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              required
            />
            {errors.fullName && (
              <span id="fullName-error" className="error-message" role="alert">
                {errors.fullName}
              </span>
            )}
          </div>

          <div className="field-group">
            <input
              type="email"
              name="email"
              className={`field ${errors.email ? 'field-error' : ''}`}
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
              required
            />
            {errors.email && (
              <span id="email-error" className="error-message" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field-group">
            <textarea
              name="message"
              className={`field ${errors.message ? 'field-error' : ''}`}
              placeholder="Your Message"
              rows={10}
              cols={30}
              value={formData.message}
              onChange={handleInputChange}
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={errors.message ? 'true' : 'false'}
              required
            />
            {errors.message && (
              <span id="message-error" className="error-message" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          {submitStatus === 'success' && (
            <div className="success-message" role="alert">
              <i className="bx bx-check-circle" aria-hidden="true"></i>
              Message sent successfully! Thank you for your inquiry.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="error-message" role="alert">
              <i className="bx bx-error-circle" aria-hidden="true"></i>
              Failed to send message. Please try again later.
            </div>
          )}

          <button 
            type="submit" 
            className="btn"
            disabled={isSubmitting}
            aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
          >
            {isSubmitting ? (
              <>
                <i className="bx bx-loader-alt bx-spin" aria-hidden="true"></i>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      <span className="number-page">{pageNumber}</span>

      <button className="back-profile" onClick={onBackToProfile}>
        <p>Profile</p>
        <i className="bx bxs-user"></i>
      </button>
    </>
  );
};

export default ContactPage;