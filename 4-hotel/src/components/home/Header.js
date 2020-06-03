import React from "react";
import Hero from '../globals/Hero'
import homeBcg from '../../images/homeBcg.jpeg'

export default function Header() {
  return <Hero img={homeBcg}>
    <h1>Hello World</h1>
  </Hero>;
}
