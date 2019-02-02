import React from 'react'
import useMergeState from '../../utils/hooks/useMergeState'

export default function Form(props) {
  const [data, setData] = useMergeState({
    name: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit(data)
  }

  function handleInputChange({ target: { name, value } }) {
    if (data.hasOwnProperty(name)) {
      setData({ [name]: value })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleInputChange}
        autoComplete="off"
      />
      <button type="submit">Carregar Dados</button>
    </form>
  )
}
