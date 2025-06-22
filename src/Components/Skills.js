import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'HTML5 & Semantic Markup' },
        { name: 'CSS3 (Sass/SCSS, Tailwind, Bootstrap)' },
        { name: 'JavaScript (ES6+)' },
        { name: 'React (Hooks, Redux, Next.js)' },
        // { name: 'TypeScript' },
        // { name: 'Vue.js' }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js (Express)' },
        // { name: 'Node.js (Express, NestJS)' },
        { name: 'PHP' },
        { name: 'Laravel (PHP Framework)' },
        { name: 'MongoDB (NoSQL)' },
        { name: 'MySQL (SQL)' },
        { name: 'REST & GraphQL APIs' }
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git (GitHub, )' },
        // { name: 'Git (GitHub, GitLab, Bitbucket)' },
        { name: 'Docker & Kubernetes' },
        // { name: 'AWS (EC2, S3,)' },
        { name: 'GCP' },
        // { name: 'CI/CD (Jenkins, GitHub Actions)' },
        // { name: 'Webpack & Vite' }
      ]
    },
    {
      category: 'Design & Collaboration',
      items: [
        { name: 'Figma (UI/UX Prototyping)' },
        // { name: 'Agile Methodologies (Scrum, Kanban)' },
        // { name: 'Jira & Confluence' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'LangChain (LLM Application Development)' },
        { name: 'LangGraph (Workflow Orchestration)' },
        { name: 'Vector Databases (Chroma, Pinecone)' }
      ]
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="skills-section" id="skills">
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
              Technical Expertise
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
          viewport={{ once: true, amount: 0.2 }}
          className="g-4 row"
        >
          {skills.map((category, index) => (
            <Col lg={4} md={6} sm={12} key={index}>
              <motion.div
                className="skill-category w-100 h-100 mb-5 mt-5"
                variants={categoryVariants}
                whileHover="hover"
              >
                <motion.h3
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  {category.category}
                </motion.h3>
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item mb-3"
                    variants={itemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          ))}
        </motion.Row>
      </Container>
    </section>
  );
};

export default Skills;