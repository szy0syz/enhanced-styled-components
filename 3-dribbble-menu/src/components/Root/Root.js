import React from 'react';
import styled from 'styled-components';
import MainNavigationItem from '~/components/MainNavigationItem';

import logo from '~/assets/logo.png';

const MainNavigation = styled.nav`
  align-items: center;
  background-color: #323232;
  display: flex;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  height: 56px;
  padding: 0 30px;
`;

const MainNavigationBoxes = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const MainNavigationLogoLink = styled.a.attrs({
  href: '#',
  onClick: evt => {
    evt.preventDefault();
  },
})`
  display: flex;
  height: 100%;
  margin-right: 20px;
  transition: opacity 0.2s ease;

  :hover {
    cursor: pointer;
    opacity: 0.6;
  }

  > img {
    margin: auto;
  }
`;

const Root = () => {
  return (
    <MainNavigation>
      <MainNavigationLogoLink>
        <img src={logo} />
      </MainNavigationLogoLink>
      <MainNavigationItem
        label="Explore"
        dropdownContent={
          <MainNavigationBoxes>
            <h1>hello11</h1>
            <h1>hello11</h1>
            <h1>hello11</h1>
            <h1>hello11</h1>
            <h1>hello11</h1>
          </MainNavigationBoxes>
        }
      />
    </MainNavigation>
  );
};

export default Root;
