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

  const skills = ['AWS', 'Azure', 'GCP (Google Cloud Platform)', 'Splunk', 'RStudio', 'Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'Python', 'PowerShell'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’m a Security Engineer who lives by a pretty simple rule: I build things with security in mind. 
              My obsession with "Information Assurance" started back at {' '}
              <a href="https://fpt.edu.vn/">a specialized technology university</a>, 
              where I was lucky enough to be surrounded by {' '}
              <a href="https://iahn.fpt.edu.vn/">a crew of mentors and peers</a> who were far more 
              interested in how systems actually worked (and how they broke) than just getting a grade.
            </p>

            <p>I spent the next five years at {' '}
              <a href="https://fpt-is.com/">a major regional systems integrator</a>, trading the classroom for
               the high-stakes world of corporate consulting. Navigating the complex maze of global financial 
               security standards taught me my most valuable lesson: security isn’t a bandage you slap on a project 
               at the end. It’s an architectural choice. If a system isn’t secure by design from the very first line 
               of code, it isn't really finished.
               I spent the next five years at {' '}
              <a href="https://fpt-is.com/">a major regional systems integrator</a>, where I joined {' '}
              <a href="https://fpt-is.com/en/fpt-eagleeye/">a team of seasoned 
               pros</a> who really showed me the ropes. They were the ones who taught me that {' '}
              <a href="https://fpt-is.com/goc-nhin-so/">technical skill is only half 
               the battle</a>; the other half is understanding the human and corporate layers behind every system. My teammates 
               pushed me to see beyond the code, showing me that security isn't a bandage you slap on a project at the 
               end—it’s an architectural choice. If a system isn’t secure by design from the very first line of code, it isn't really finished.
            </p>

            <p>
              I later spent some time helping out with our family’s business, which really changed my perspective. 
              It taught me that security shouldn’t be a bottleneck—it’s actually there to help a company move forward safely. 
              Seeking to learn more, I made the move to Australia to join a new community of researchers and practitioners. These days, 
              you’ll mostly find me (and usually a cup of coffee/tea) working through 
              <a href="https://adelaide.edu.au/study/degrees/master-of-information-technology-cyber-security/">my Master of IT</a>, 
              where I feel pretty lucky to be collaborating with some brilliant minds on the 2026 frontiers of {' '}
              <a href="https://hoaio.com/">Quantum</a>, {' '}
              <a href="https://www.aisa.org.au/">Cloud Security</a>, and {' '}<a href="https://www.aicollective.com/">AI</a>.
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
