import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setColor, setRem, setBorder, media, setLetterSpacing } from "../../styles";

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  50% {
    opacity: 0.5;
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const fadeIn = (start, point, end) => {
  const animation = keyframes`
    0% {
    opacity: 0;
    transform: translateY(${start});
  }

  50% {
    opacity: 0.5;
    transform: translateY(${end});
  }

  100% {
    opacity: 1;
    transform: translateY(${end});
  }
  `;
  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};

const Banner = ({ title, className, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${setRem(60)} ${setRem(32)};
  /* setRem */
  ${setLetterSpacing(3)}
  /* setLetterSpacing */
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    /* setRem */
    color: ${setColor.primaryColor};
    span {
      color: ${setColor.mainWhite};
    }
  }

  p {
    width: 85%;
    color: ${setColor.mainWhite};
    margin: 0 auto;
  }


  ${media.tablet`
    width: 70vw;
    /* setBorder */
    ${setBorder({ width: "6px", color: setColor.primaryColor })};

    p {
      width: 75%;
    }
  `}

  h1 {
    /* animation */
    /* animation: ${animation} 3s ease-in-out; */
    ${fadeIn("100%", "-10%", "0")}
  }

  .info {
    /* animation */
    ${fadeIn("-100%", "10%", "0")}
  }
`;

export default BannerWrapper;
