import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram ,FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/vipulsangwan771',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/vipul-sangwan-a3173b262/',
      label: 'LinkedIn'
    },
     {
          icon: <FaEnvelope />,
          url: 'mailto:vipulsangwan771@gmail.com',
          label: 'Email'
        }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <motion.div className="footer-about" variants={itemVariants}>
                <h3>About Me</h3>
                <p>
                  I am a passionate full-stack developer dedicated to creating
                  beautiful and functional web applications. Let's work together
                  to bring your ideas to life.
                </p>
              </motion.div>
            </Col>

            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <motion.div className="footer-contact" variants={itemVariants}>
                <h3>Contact Info</h3>
                <p>
                  <strong>Email:</strong> vipulsangwan771@gmail.com
                </p>
                {/* <p>
                  <strong>Phone:</strong> +1 234 567 890
                </p> */}
                <p>
                  <strong>Location:</strong> India
                </p>
              </motion.div>
            </Col>

            <Col lg={4} md={6}>
              <motion.div className="footer-social" variants={itemVariants}>
                <h3>Follow Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>

          <motion.div
            className="footer-bottom"
            variants={itemVariants}
          >
            <p>
              &copy; {currentYear} Vipul. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer; 