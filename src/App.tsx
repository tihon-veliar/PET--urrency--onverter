import React from 'react'
import styled from 'styled-components'
import FullScreenPage from '../src/components/FullScreenPage'


const App: React.FC=() =>{
  

  return (
    <Wrapper>
      <FullScreenPage children/>
      <FullScreenPage children/>
      <FullScreenPage children/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
overflow-y: scroll;`

export default App;
