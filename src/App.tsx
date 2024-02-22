import React from 'react'
import styled from 'styled-components'
import FullScreenPage from '../src/components/FullScreenPage'


const App: React.FC=() =>{
  

  return (
    <Wrapper>
      <FullScreenPage  title='Title of 1 Page'></FullScreenPage>
      <FullScreenPage  title='Title of 2 Page'></FullScreenPage>
      <FullScreenPage title='Title of 3 Page'></FullScreenPage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
overflow-y: scroll;`

export default App;
