import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Form from './components/Form/Form'
import HabboInfo from './components/HabboInfo/HabboInfo'
import './index.css'

const Wrapper = styled.div`
  min-width: 380px;
  width: 50vw;
  margin: 0 auto;
  padding: 1rem;
  border: solid 1px #000;
`

function App() {
  const [name, setName] = useState('')

  function handleSubmit({ name }) {
    setName(name)
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit} />
      {!!name && <HabboInfo name={name} />}
    </Wrapper>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
