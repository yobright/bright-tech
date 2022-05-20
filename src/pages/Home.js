import React from 'react'
import AstroCard from '../components/AstroText/AstroCard';
import Clickable from '../components/Clickable';
import HomeCta from '../components/CTA/HomeCta';
import Hero from '../components/Hero'
import Skills from '../components/Skills'
function Home() {
  
  return (
    <div>
      <Hero />
      <Skills />
      <Clickable />
      <AstroCard
        cardOrientation="lg:grid-cols-2"
        picture="bg-[url('https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/logo-black-bg.png')] bg-center h-80"
        title="Astro"
        description="Astro est un détaillant de mode en ligne basé à Abidjan. Spécialisée dans les vêtements, les accessoires, les chaussures et produit de beauté. Une expérience plus optimisée et un catalogue plus varié en un clic sans besoin de se déplacer !"
        
      />
      <AstroCard
        cardOrientation="lg:grid-cols-2"
        picture="bg-[url('https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/krebo.jpg')] bg-center h-80 order-last"
        title="NFT - TAA KREBO #2  - Tribal African Art"
        description="Tribal African Art est un projet NFT qui vise à créer une communauté et à réunir de vrais collectionneurs et fan d'art Africain, ainsi que les artistes et connaisseurs d'art numérique."
        linkExt2Content="Voir sur Opensea"
      />
      <AstroCard
        cardOrientation="lg:grid-cols-2"
        picture="bg-[url('https://astrostorebucket.s3.eu-west-3.amazonaws.com/brighttech/bright-agro.png')] bg-center h-80"
        title="Bright Agronomie"
        description="Bright Agronomie est une entreprise spécialisée dans le domaine agropastoral. En activité depuis Décembre 2019, elle a pour objectif de contribuer à l'autosuffisance et la sécurité alimentaire en développant un réseau fluide agricole."
        linkExtContent="Voir le site"
      />
      <HomeCta />
    </div>
  );
}

export default Home