import React, { Component } from 'react';
import Room from './Room';
import styled from 'styled-components';
import Title from '../globals/Title';
import Section from '../globals/Section';
import rooms from './rooms-data';
import { media, setRem, setColor } from '../../styles';

export default class Rooms extends Component {
  state = {
    rooms,
  };

  render() {
    return (
      <Section color={setColor.mainGrey}>
        <Title title="out rooms" center />
        <RoomsCenter>
          {this.state.rooms.map((room) => (
            <Room key={room.id} room={room} />
          ))}
        </RoomsCenter>
      </Section>
    );
  }
}

const RoomsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;

  ${media.large`
    width: 100vw;
    max-width: 1170px;
  `}

  /* 1170 - 90 = 1080 */

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-column-gap: ${setRem(45)};

  /* ！下面两段代码可以缩略成上面三行代码 */

  /* ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
  `}

  ${media.large`
    grid-template-columns: repeat(3, 1fr);
  `} */
`;
