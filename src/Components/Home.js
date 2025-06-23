import { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { ReactTyped as Typed } from 'react-typed';
import { Link } from 'react-router-dom';
import profile from '../assets/img/pf.avif';
import cvFile from '../assets/img/vipul_cv.pdf';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2023; // Assuming you started in 2020, adjust as needed

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

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3
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
    // {
    //   icon: <FaTwitter />,
    //   url: 'https://twitter.com/yourusername',
    //   label: 'Twitter'
    // },
    {
      icon: <FaEnvelope />,
      url: 'mailto:vipulsangwan771@gmail.com',
      label: 'Email'
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [purpose, setPurpose] = useState('');

  const handleDownload = async () => {
    if (!email || !purpose) {
      toast.error('Please fill all required fields.');
      return;
    }

    try {
      setIsSubmitting(true);

      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/download-cv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, purpose }),
      });

      // Trigger file download
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = 'Vipul_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success('CV downloaded successfully!');

      setShowModal(false);
      setEmail('');
      setPurpose('');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h1 className="hero-title" variants={itemVariants}>
                Hi, I'm <span className="highlight">Vipul</span>
              </motion.h1>
              <motion.h2 className="hero-subtitle highlight" variants={itemVariants}>
                I'm a{' '}
                <Typed
                  strings={[
                    'Web Developer',
                    'React Developer',
                    'UI/UX Developer',
                    'MERN Stack',
                    'Full-Satck Developer',
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </motion.h2>
              <motion.p className="hero-text" variants={itemVariants}>
                With {experience}+ years of hands-on experience as a MERN Stack Developer, I craft dynamic, high-performance web applications using MongoDB, Express.js, React, and Node.js. I specialize in building scalable, responsive, and user-centric solutions that deliver seamless digital experiences.
              </motion.p>

              <motion.div className="hero-buttons" variants={itemVariants}>
                <motion.div variants={itemVariants}>
                  <Button variant="primary" onClick={() => setShowModal(true)} className="me-3" as={motion.button} variants={buttonVariants} whileHover="hover" whileTap="tap">
                    Download CV
                  </Button>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Link to='/contact'>
                    <Button variant="outline-primary" as={motion.button} variants={buttonVariants} whileHover="hover" whileTap="tap">
                      Contact Me
                    </Button></Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="hero-divider"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              ></motion.div>

              <motion.div
                className="hero-social"
                variants={itemVariants}
              >
                <motion.p variants={itemVariants}>Connect with me:</motion.p>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    variants={socialVariants}
                    whileHover="hover"
                  >
                    {social.icon}
                    {/* <span className="sr-only">{social.label}</span> */}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={profile}
                alt="Profile"
                className="img-fluid   "
              // className="img-fluid   responsive-rounded"
              />
              <motion.div
                className="floating-shapes"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Add your floating shapes here */}
              </motion.div>
            </motion.div>
          </Col>
        </Row>


        {/* Modal for Email Input */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Download CV</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Enter your email to download the CV</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="your@example.com"
                  value={email}
                  className='form-control-custom form-control shadow-none'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="purpose" className="mt-3">
                <Form.Label>Purpose for downloading the CV</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="e.g. Hiring, Collaboration, Reference, etc."
                  value={purpose}
                  className='shadow-none'
                  onChange={(e) => setPurpose(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
            <Button variant="primary" onClick={handleDownload} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit & Download'}
            </Button>
          </Modal.Footer>
        </Modal>

      </Container>
    </section>
  );
};

export default Home; 