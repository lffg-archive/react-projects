import React from 'react'

export default function HabboDataRow({ label, value, isSamp = false }) {
  return (
    <tr>
      <td>{label}</td>
      <td>{isSamp ? <code>{value}</code> : value}</td>
    </tr>
  )
}
