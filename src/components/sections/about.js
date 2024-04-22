import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'Django',
    'Vue.js',
    'React',
    'Node.js',
    'Docker',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Elasticsearch',
    'Apache Kafka',
    'RESTful API, GraphQL',
    'Websocket',
    'AWS',
    'Nginx',
    'TensorFlow/PyTorch',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi there! My name is Cuong, and I am an experienced full-stack developer with a deep
              interest in AI. I have over 5 years of experience with Python and 4 years with
              JavaScript. In backend development, I have 4+ years of experience using Django, while
              in frontend development, I have 3 years of experience with both Vue.js and React.
            </p>

            <p>
              I excel in all stages of the software development lifecycle, from initial
              conceptualization and design to seamless implementation and deployment. My proficiency
              spans across backend, frontend, and DevOps.
            </p>

            <p>
              Moreover, my expertise extends to system design, relational and non-relational
              databases, SOLID principles, design patterns, algorithms, and a wide array of
              AI-related fields, including data science, data analysis, machine learning, and deep
              learning.
            </p>

            <p>
              My best notable achievement is spearheading the development of PMIS, a multi-tenant
              SaaS construction project management system. PMIS caters to over 1000 users across 4
              prominent companies (DDIC, CH Group, EPM, Mitalab). Built with a robust tech stack
              comprising Django, Django Rest Framework, Nuxt.js, PostgreSQL, Redis, Elasticsearch,
              Celery, and hosted on AWS, PMIS offers a comprehensive suite of features. These
              include contract management, online bidding management, design management, project
              progress tracking using Earned Value Management (EVM), construction site reporting
              with 360-degree photos, material procurement management, HRM functionalities, and
              more.
            </p>

            <p>
              Take a look at my portfolio to explore some of my standout projects. Don't hesitate to
              reach out—I'd love to discuss how I can help bring your project to life.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
