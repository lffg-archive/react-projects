import React from 'react'
import useMergeState from '../../hooks/useMergeState'
import TextField from '../Form/TextField'

export default function GeneratorInput(props) {
  const [data, setData] = useMergeState({
    username: '',
    tag: ''
  })

  function handleInputChange({ target: { name, value } }) {
    if (data.hasOwnProperty(name)) {
      setData({ [name]: value })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    props.onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Seu nick:"
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <TextField
        label="Sua tag:"
        name="tag"
        value={data.tag}
        onChange={handleInputChange}
      />
      <hr />
      <button type="submit">Gerar Dados</button>
    </form>
  )
}
