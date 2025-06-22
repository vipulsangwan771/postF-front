import React, {  useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Send data to backend
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      if (response.data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null
        });

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }

    } catch (error) {
      const response = error.response?.data;

      let errorMessages = [];

      if (response?.errors && Array.isArray(response.errors)) {
        errorMessages = response.errors.map((err) => err.msg);
      } else if (response?.message) {
        errorMessages = [response.message];
      } else {
        errorMessages = [error.message || 'Failed to send message. Please try again later.'];
      }

      setStatus({
        loading: false,
        success: false,
        error: errorMessages
      });
    }

  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'vipulsangwan771@gmail.com',
      link: 'mailto:vipulsangwan771@gmail.com'
    },
    // {
    //   icon: <FaPhone />,
    //   title: 'Phone',
    //   content: '+1 (123) 456-7890',
    //   link: 'tel:+11234567890'
    // },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/vipulsangwan771',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/vipul-sangwan-a3173b262/',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/yourusername',
      color: '#e4405f'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Contact Me
            </motion.h2>
            <motion.div
              className="section-title-underline"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={4}>
            <motion.div
              className="contact-info h-100 w-100"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants}>Get In Touch</motion.h3>
              <motion.p variants={itemVariants}>
                Feel free to reach out to me for any inquiries or opportunities.
              </motion.p>

              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    boxShadow: "0 5px 15px rgba(52, 152, 219, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="icon">
                    {item.icon}
                  </div>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </Col>

          <Col lg={8}>
            <motion.div
              className="contact-form h-100 w-100"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants}>Send Me a Message</motion.h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <motion.div variants={itemVariants}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control-custom"
                        />
                        <Form.Label>Your Name</Form.Label>
                      </Form.Group>
                    </motion.div>
                  </Col>
                  <Col md={6}>
                    <motion.div variants={itemVariants}>
                      <Form.Group className="form-floating mb-3">
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control-custom"
                        />
                        <Form.Label>Your Email</Form.Label>
                      </Form.Group>
                    </motion.div>
                  </Col>
                </Row>

                <motion.div variants={itemVariants}>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                    />
                    <Form.Label>Subject</Form.Label>
                  </Form.Group>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Form.Group className="form-floating mb-3">
                    <Form.Control
                      as="textarea"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="form-control-custom"
                      style={{ height: '150px' }}
                    />
                    <Form.Label>Your Message</Form.Label>
                  </Form.Group>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    className="submit-btn"
                    as={motion.button}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    disabled={status.loading}
                  >
                    {status.loading ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status.success && (
                    <div className="alert alert-success mt-3">
                      Your message has been sent successfully!
                    </div>
                  )}

                  {status.error && (
                    <div className="alert alert-danger mt-3">
                      {status.error}
                    </div>
                  )}
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 