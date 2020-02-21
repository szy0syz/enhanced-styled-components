import React from 'react';
import styled from 'styled-components';
import Button from '#components/shard/Button';

const MainConten = styled.div`
  color: white;
  background-color: ${props => props.theme.regalBlue};
  flex: 1;
  padding: 10px;
`;

const SideBar = styled.div`
  color: white;
  background-color: ${props => props.theme.dimGray};
  /* 我不自适应，我固定宽度就是200px */
  flex: 0 auto;
  width: 200px;
  padding: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Artcile = () => {
  return (
    <Wrapper>
      <MainConten>
        <p>MainContent</p>
        <p>
          <Button size="small">Click me!</Button>
          <Button>Click me!</Button>
          <Button size="large">Click me!</Button>
        </p>
        <Button block>Click me!</Button>
        <Button block noBorder>Click me!</Button>
      </MainConten>
      <SideBar>Siderbar</SideBar>
    </Wrapper>
  );
};

export default Artcile;
