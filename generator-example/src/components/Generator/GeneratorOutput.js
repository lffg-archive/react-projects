import React, { Fragment } from 'react'
import styled from 'styled-components'

const Output = styled.pre`
  border: solid 1px;
  padding: 1rem;
`

export default function GeneratorOutput({ data } = {}) {
  const list = [['Nick', data.username], ['Tag', data.tag]]

  return (
    <Output>
      {list.map(([label, value], index, { length }) => (
        <Fragment key={index}>
          {label}: {value}
          {length - 1 !== index && '\n'}
        </Fragment>
      ))}
    </Output>
  )
}
