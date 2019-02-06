import React, { useState } from 'react'
import GeneratorInput from './GeneratorInput'
import GeneratorOutput from './GeneratorOutput'

export default function Generator() {
  const [data, setData] = useState(null)

  function handleSubmit(data) {
    setData(data)
  }

  return (
    <>
      {/*
       * Note abaixo que estamos passanso uma prop "onSubmit" para o componente
       * GeneratorInput. Ele irá chamar essa função assim que os dados forem
       * submetidos. */}
      <GeneratorInput onSubmit={handleSubmit} />

      {/*
       * Note abaixo que só estamos renderizando o componente "GeneratorOutput"
       * caso "data" seja truthy (não falsey). */}
      {data && <GeneratorOutput data={data} />}
    </>
  )
}
