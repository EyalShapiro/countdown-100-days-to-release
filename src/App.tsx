import React from 'react'
import styled from 'styled-components'
import { Layout } from './components/Layout'
import { CountdownTimer } from './components/CountdownTimer'
import { IconLinks } from './components/IconLinks'
import texts from './texts.json'

const App: React.FC = () => {
  return (
    <Layout>
      <Title>{texts.title}</Title>
      <CountdownTimer />
      <IconLinks />
    </Layout>
  )
}
const Title = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

export default App
