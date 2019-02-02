import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HabboDataTable from './HabboDataTable'

const Mt = styled.div`
  margin-top: 1rem;
`

const API_ENDPOINT = 'https://www.habbo.com.br/api/public/users'

export default function HabboInfo(props) {
  const [userdata, setUserdata] = useState(null)

  async function fetchData() {
    setUserdata(null)
    const response = await fetch(`${API_ENDPOINT}?name=${props.name}`)
    const data = await response.json()
    setUserdata(data)
  }

  useEffect(() => void fetchData(), [props.name])

  return (
    <Mt>
      Dados para o usuário <code>{props.name}</code>:
      <Mt>
        {!userdata ? 'Carregando...' : <HabboDataTable data={userdata} />}
      </Mt>
    </Mt>
  )
}
