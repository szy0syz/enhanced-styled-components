import React from 'react';
import styled from 'styled-components';
import Article from '#components/Article';

const Heading = styled.div`
 color: ${props => props.theme.regalBlue};
 text-align: center;
 font-size: 2em;
`;

const Root = () => {
  return (
    <div>
      <Heading>Heading</Heading>
      <Article />
    </div>
  );
};

export default Root;
