import React from 'react';
import styled from 'styled-components';


interface FullScreenLayoutProps {
    title: string;
   
  }


const FullScreenPage: React.FC<FullScreenLayoutProps> =({title})=>{
    return(
        <Section>
            <Title> {title}</Title>
        </Section>
    )
}

const Section=styled.div`
width: auto;
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