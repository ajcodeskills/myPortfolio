import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection} from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I am Ajay Kumar. Currently I am doing full stack development at Masai School and designed some of the projects using MEARN technology.
      </SectionText>
      <Button onClick = {() => window.open('https://drive.google.com/file/d/16_P6r8VsShewkzSPp1j8IbiHaFfGLRfu/view?usp=sharing', '_blank')}>Download My CV</Button>
    </LeftSection>
    
    
  </Section>
);

export default Hero;