import React, { ReactNode } from 'react';
import styled from 'styled-components';


interface FullScreenLayoutProps {
    children: ReactNode
  }


const FullScreenPage: React.FC<FullScreenLayoutProps> =({children})=>{
    return(
        <Section>
            <Title> {children}</Title>
        </Section>
    )
}

const Section=styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: center;
`

const Title = styled.h1`
font-size:180px;
color: #322F27`


export default FullScreenPage