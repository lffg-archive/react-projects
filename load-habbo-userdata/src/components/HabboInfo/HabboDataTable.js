import React from 'react'
import styled from 'styled-components'
import HabboDataRow from './HabboDataRow'

const Error = styled.div`
  padding: 1rem;
  border: solid 1px red;
  color: red;
`

export default function HabboDataTable({ data }) {
  const rows = [
    ['Usuário', data.name, { isSamp: true }],
    ['Missão', data.motto, { isSamp: true }],
    ['Perfil Público?', data.profileVisible ? 'Sim' : 'Não']
  ]

  if (data.error) {
    return (
      <Error>
        {data.error === 'not-found'
          ? 'Usuário não existente.'
          : 'Erro genérico. Tente atualizar a página e tente novamente.'}
      </Error>
    )
  }

  return (
    <table border={1}>
      <tbody>
        {rows.map(([label, value, props], index) => (
          <HabboDataRow key={index} label={label} value={value} {...props} />
        ))}
      </tbody>
    </table>
  )
}
