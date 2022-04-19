import React from 'react'
import AstroCard from '../components/AstroText/AstroCard';
import Clickable from '../components/Clickable';
import HomeCta from '../components/CTA/HomeCta';
import Form from '../components/Form/Form';
import Hero from '../components/Hero'
import Skills from '../components/Skills'
function Home() {
  
  return (
    <div>
      <Hero />
      <Skills />
      <Clickable />
      <AstroCard/>
      <HomeCta />
      <Form />
    </div>
  );
}

export default Home