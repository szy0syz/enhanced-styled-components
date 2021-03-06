import React from 'react';
import Hero from '../globals/Hero';
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/Button';
import homeBcg from '../../images/homeBcg.jpeg';

export default function Header() {
  return (
    <Hero img={homeBcg}>
      <Banner
        greeting="welcome to"
        title="beachwalk resort"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet excepturi architecto id explicabo a ratione."
      >
        <PrimaryBtn t="1rem">View Detail</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://google.com">google</PrimaryBtn> */}
      </Banner>
    </Hero>
  );
}
