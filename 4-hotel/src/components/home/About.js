import React from 'react';
import styled from 'styled-components';
import Title from '../globals/Title';
import Section from '../globals/Section';

import { PrimaryBtn } from '../globals/Button';
import aboutImg from '../../images/aboutBcg.jpeg';
import { setRem, setBorder, setColor } from '../../styles';

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img scr={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            hic dolor pariatur accusamus aperiam reprehenderit tempore, numquam
            amet iusto blanditiis eaque sequi, est optio sapiente reiciendis
            doloribus sed enim eveniet.
          </p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
        <Title title="about us" center />
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
`;

export default About;
