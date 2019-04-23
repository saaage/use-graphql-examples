import React from 'react'
import styled from 'styled-components'
// import useQuery from 'react-apollo-hooks'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const MovieSelect = props => {
  const { activeId, updateMovieId, films } = props

  const options = films.map(f => {
    return (
      <MenuItem key={f.node.id} value={f.node.id}>
        {f.node.title}
      </MenuItem>
    )
  })

  return (
    <MovieSelectRoot>
      <Select
        value={activeId === null ? '' : activeId}
        onChange={e => {
          const film = films.find(f => f.node.id === e.target.value) || {
            node: { title: '' }
          }
          updateMovieId(e.target.value, film.node.title)
        }}
        style={{ minWidth: 250 }}
      >
        <MenuItem value="" />
        {options}
      </Select>
    </MovieSelectRoot>
  )
}

const MovieSelectRoot = styled.div`
  display: flex;
  justify-content: center;
`

export default MovieSelect
