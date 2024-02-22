import React, { ReactNode } from 'react';
import styled from 'styled-components';


interface FullScreenLayoutProps {
    children: ReactNode
  }


const FullScreenPage: React.FC<FullScreenLayoutProps> =({})=>{
    return(
        <Section>
            
        </Section>
    )
}

const Section=styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: center;
`
export default FullScreenPage