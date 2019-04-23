import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Space from 'Space'

const SayHelloContainer = styled.div.withConfig({
  displayName: 'FavoriteColor'
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`

const SayHello = () => {
  const [name, setName] = useState('Bill')

  const handleInputChange = e => {
    setName(e.target.value)
  }

  return (
    <SayHelloContainer>
      <h2>Hello, {name}. Nice to meet you!</h2>

      <Space value="one" />

      <TextField
        onChange={handleInputChange}
        placeholder="please enter a name"
        style={{ width: 300 }}
      />
    </SayHelloContainer>
  )
}

export default SayHello
