import React from 'react'
import HabboDataRow from './HabboDataRow'

export default function HabboDataTable({ data }) {
  const rows = [
    ['Usuário', data.name, { isSamp: true }],
    ['Missão', data.motto, { isSamp: true }],
    ['Perfil Público?', data.profileVisible ? 'Sim' : 'Não']
  ]

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
