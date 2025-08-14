import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import image1 from './image/image.png';
import image2 from './image/image2.png';
import image3 from './image/imag3.png';
import image4 from './image/image4.png';
import imageswap from './image/bookswap.png';
import crypto from './image/crypto.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Real-Time Chat System',
      description: 'A full-stack real-time chat application with user authentication, socket-based messaging, and MongoDB database.',
      image: image2,
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
      category: 'web',
      github: 'https://github.com/vipulsangwan771/react_chatSystem',
      demo: 'https://react-chatsystem.onrender.com'
    },
    {
      id: 2,
      title: 'Advanced Todo App',
      description: 'A full-featured Todo app allowing users to create, edit, delete, update tasks and change status with a clean UI.',
      image: image3,
      technologies: ['React', 'Bootstrap', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
      category: 'web',
      github: 'https://github.com/vipulsangwan771/react_todos',
      demo: 'https://react-todos-biau.onrender.com'
    },
    {
      id: 3,
      title: 'Instagram Scraper with Langchain',
      description: 'An AI-powered tool built with Langchain and LangGraph that scrapes Instagram data using a username.',
      image: image4,
      technologies: ['React', 'Tailwind CSS', 'Langchain', 'LangGraph', 'Nodejs', 'OpenAI'],
      category: 'ai',
      github: 'https://github.com/vipulsangwan771/i-scrap',
      demo: 'https://i-scrap.onrender.com',
    },
    {
      id: 4,
      title: 'Time Utilities Suite',
      description: 'A responsive and modern React application that includes multiple time-based tools like Watch, Stopwatch, Timer, and Alarm. Built to enhance productivity with a clean interface and accurate functionality.',
      image: image1,
      technologies: ['React', 'React Router', 'Tailwind CSS', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/vipulsangwan771/react-watches',
      demo: 'https://react-watches.onrender.com'
    },
    {
      id: 5,
      title: 'BookSwap Marketplace',
      description: 'A modern and user-friendly online marketplace for book lovers to buy, sell, and swap books seamlessly. Designed to connect readers, reduce book waste, and promote a sustainable reading culture with an intuitive interface and smooth transactions.',
      image: imageswap,
      technologies: ['React', 'React Router', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      github: 'https://github.com/vipulsangwan771/bookswap-front',
      demo: 'https://bookswap-front.onrender.com/'
    },
    {
      id: 6,
      title: 'Crypto Tracker',
      description: 'A real-time cryptocurrency tracking application that provides live market data, price charts, and trends for multiple coins. Designed with a clean, responsive interface to help users make informed investment decisions quickly and efficiently.',
      image: crypto,
      technologies: ['React', 'React Router', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'CoinGecko API'],
      category: 'web',
      github: 'https://github.com/vipulsangwan771/Crypto_front',
      demo: 'https://crypto-front-8l8t.onrender.com'
    }

  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const filterButtonVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="projects-section" id="projects">
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
              My Projects
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

        <motion.div
          className="project-filters mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {['all', 'web', 'ai'].map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              variants={filterButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.Row
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="g-4 row"
        >
          {filteredProjects.map((project, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <motion.div
                className="project-card w-100 h-100"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="card-img-wrapper">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={imageVariants}
                    whileHover="hover"
                  />
                  <motion.div
                    className="card-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="visible"
                  >
                    <div className="card-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
                        <FaGithub />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="card-link">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </motion.div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="technology-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </motion.Row>
      </Container>
    </section>
  );
};

export default Projects;
