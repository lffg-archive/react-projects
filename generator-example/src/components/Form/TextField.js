import React from 'react'
import styled from 'styled-components'

const FormGroup = styled.div`
  margin-bottom: 1rem;

  & > label {
    display: block;
    margin-bottom: 0.25rem;
  }
`

export default function TextField(props) {
  const id = props.id || Math.floor(Math.random() * Date.now()).toString()

  return (
    <FormGroup>
      {props.label && <label htmlFor={id}>{props.label}</label>}
      <input type={props.type || 'text'} id={id} {...props} />
    </FormGroup>
  )
}
