import React from 'react';
import styled from 'styled-components';
import Title from '../globals/Title';
import Section from '../globals/Section';

import { PrimaryBtn } from '../globals/Button';
import aboutImg from '../../images/aboutBcg.jpeg';
import {
  media,
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
} from '../../styles';

const About = () => {
  return (
    <Section color={setColor.mainWhite}>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about us" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            hic dolor pariatur accusamus aperiam reprehenderit tempore, numquam
            amet iusto blanditiis eaque sequi, est optio sapiente reiciendis
            doloribus sed enim eveniet.
          </p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(2.5)};
    }
  }
  width: 90vw;
  margin: 0 auto;

  ${media.desktop`
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    .about-img, .about-info {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  `}
`;

export default About;
