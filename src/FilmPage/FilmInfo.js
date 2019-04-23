import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-apollo-hooks'
import GET_FILM_BY_ID from 'graphql/queries/getFilmById'
import CharacterCard from 'FilmPage/CharacterCard'
import Space from 'Space'

const FilmInfoRoot = styled.div`
  height: 100%;
`

const CharacterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
`

const FilmInfo = props => {
  const { id } = props

  const { data, error, loading } = useQuery(GET_FILM_BY_ID, {
    variables: { id }
  })

  if (error) {
    return <p>whoops...something went wrong {error.message}</p>
  }

  if (loading) {
    return null
  }

  const characters = data.film.characterConnection.edges.map(c => {
    const { id } = c.node
    return <CharacterCard key={id} {...c.node} />
  })

  return (
    <FilmInfoRoot>
      <b>Cast ({characters.length})</b>

      <Space value="one" />

      <CharacterGrid>{characters}</CharacterGrid>
    </FilmInfoRoot>
  )
}

export default FilmInfo
