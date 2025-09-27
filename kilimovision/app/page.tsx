
import Hero from './ui/hero-area';
import LetUsKnow from './ui/letUsKnow';
import DisplayAgents from './ui/agents';
import Achieved from './ui/achievements';
import TestimonialSection from './ui/testmonials';
import Gallery from './ui/components/Gallery/index';
import Faq from './ui/components/faqs/faqs';
import About from './ui/components/About/about';
import Services from './ui/components/Services/services';
import Technology from './ui/components/Technology/technology';
import Footer from './ui/components/Footer/Footer';
import Header from './ui/components/Header/header';


export const revalidate = 0;

export default async function Page(){

  // const featuredAgents = await fetchFeaturedAgents();
  return (
    <main>
    
      {/* components */}
      <Header />

       <Hero /> 
        <Services />
      <About />
      <Technology />
      {/* <Expert /> */}
      {/* <Gallery /> */}
      
     
     
      {/* <LowerNav /> */}
    

      {/* {<DisplayProperty/>} */}
      <LetUsKnow />
      <Faq />
      <Footer />
      {/* <DisplayAgents featuredAgents={featuredAgents} />
      <Achieved />
      <TestimonialSection /> */}
      {/* <Newsletter /> */}
      {/* <UpperNav /> */}
      {/* <Contactusform /> */}
    



      
    
  
    
    </main>
  );
};

