import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaCheck } from 'react-icons/fa';

const About = () => {
  const currentYear = new Date().getFullYear();
  const experience = currentYear - 2020; // Adjust based on your experience

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Git', level: 90 }
  ];

  const stats = [
    { number: experience, label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js).'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Frontend Development',
      description: 'Creating beautiful, responsive user interfaces with React.js, Tailwind CSS, and modern frontend technologies.'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Developing efficient APIs and backend systems using Node.js, Express, and MongoDB with a focus on performance and security.'
    },
  {
    icon: <FaCheck />,
    title: 'Quality Assurance & Testing',
    description: 'Ensuring application stability and performance through rigorous manual and automated testing processes.'
  }
  ];

  // Animation variants
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

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="about-section" id="about">
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
              About Me
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

        <motion.Row
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="align-items-center g-5 row"
        >
          <Col lg={6}>
            <motion.div
              className="about-tech-card p-4 rounded shadow-lg bg-dark text-white h-100 d-flex flex-column justify-content-center"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 120 }}
              style={{
                border: '1px solid #333',
                background: 'linear-gradient(145deg, #1e1e1e, #2c2c2c)',
                borderRadius: '16px',
              }}
            >
              <h5 className="mb-4 text-warning">Tech Stack Expertise</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="badge bg-primary me-2">React.js</span>
                  <span className="badge bg-secondary">Frontend</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-dark border border-light me-2">Next.js</span>
                  <span className="badge bg-secondary">SSR/SPA</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-success me-2">Node.js</span>
                  <span className="badge bg-secondary">Backend</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-info text-dark me-2">Express.js</span>
                  <span className="badge bg-secondary">API Layer</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-warning text-dark me-2">MongoDB</span>
                  <span className="badge bg-secondary">Database</span>
                </li>

                <li className="mb-2">
                  <span className="badge bg-info text-dark me-2">Tailwind CSS</span>
                  <span className="badge bg-secondary">UI Utility</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-primary me-2">Bootstrap</span>
                  <span className="badge bg-secondary">UI Framework</span>
                </li>

                <li className="mb-2">
                  <span className="badge bg-danger me-2">Laravel</span>
                  <span className="badge bg-secondary">PHP Framework</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-primary-subtle text-dark me-2">PHP</span>
                  <span className="badge bg-secondary">Backend</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-secondary text-dark me-2">SQL</span>
                  <span className="badge bg-secondary">Database</span>
                </li>

                <li className="mb-2">
                  <span className="badge bg-info text-dark me-2">Stripe</span>
                  <span className="badge bg-secondary">Payment Integration</span>
                </li>
                <li className="mb-2">
                  <span className="badge bg-dark text-light me-2">LangChain/LangGraph</span>
                  <span className="badge bg-secondary">AI/LLM</span>
                </li>
                {/* <li className="mb-2">
                  <span className="badge bg-dark text-light me-2"></span>
                  <span className="badge bg-secondary">AI/LLM</span>
                </li> */}
              </ul>

              <div className="mt-4">
                <code className="text-success">
                  const developer = {"{ name: 'Vipul', stack: 'MERN + More' }"}
                </code>
              </div>
            </motion.div>
          </Col>



          <Col lg={6}>
            <motion.div className="about-content" variants={itemVariants}>
              <h3 className="mb-4 fw-bold text-primary">Who am I?</h3>
              <p className="mb-3 fs-5 text-muted">
                I'm a <strong>Full-Stack Developer</strong> based in India with a passion for crafting scalable and
                performance-driven web applications. I specialize in the <strong>MERN stack</strong> — MongoDB,
                Express.js, React, and Node.js — to deliver complete end-to-end solutions.
              </p>
              <p className="mb-3 fs-5 text-muted">
                My journey began with a desire to create meaningful digital experiences. Over the years, I’ve built
                dynamic frontend interfaces, architected secure backend systems, and collaborated on impactful
                products across industries.
              </p>
              <p className="mb-0 fs-5 text-muted">
                Clean code, responsive design, and problem-solving are at the heart of everything I do. I'm always
                eager to learn, grow, and push boundaries through modern web technologies.
              </p>
            </motion.div>
          </Col>
        </motion.Row>


        <motion.Row
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="g-4 mt-5 row"
        >
          <Col lg={12}>
            <motion.h3
              className="text-center mb-5"
              variants={itemVariants}
            >
              What I Do
            </motion.h3>
          </Col>
          {services.map((service, index) => (
            <Col  md={6} sm={12} key={index}>
              <motion.div
                className="service-item w-100 h-100"
                variants={serviceVariants}
                whileHover="hover"
              >
                <div className="icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </motion.div>
            </Col>
          ))}
        </motion.Row>
      </Container>
    </section>
  );
};

export default About; 