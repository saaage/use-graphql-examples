import React from 'react'
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

class SayHello extends React.Component {
  /* Thanks to babel/create-react-app we don't have to write the constructor below
   
    constructor(props) {
      super(props)

      this.state = {
        name: 'Bill'
      }

      this.handleInputChange = this.handleInputChange.bind(this)
    }

  */

  state = {
    name: 'Bill'
  }

  handleInputChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { name } = this.state

    return (
      <SayHelloContainer>
        <h2>Hello, {name}. Nice to meet you!</h2>

        <Space value="one" />

        <TextField
          onChange={this.handleInputChange}
          placeholder="please enter a name"
          style={{ width: 300 }}
        />
      </SayHelloContainer>
    )
  }
}

export default SayHello
