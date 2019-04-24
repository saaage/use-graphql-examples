import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-apollo-hooks'
import GET_ALL_FILMS from 'graphql/queries/getAllFilms'
import MovieSelect from 'FilmPage/MovieSelect'
import FilmInfo from 'FilmPage/FilmInfo'
import Space from 'Space'

/**
 * Film is component which displays movie information for a Star Wars film including title, rlease date, and cast.
 */
const FilmPage = () => {
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const activeFilm = id !== ''

  const updateActiveMovie = (id, title) => {
    setId(id)
    setTitle(title)
  }

  const { data, error, loading } = useQuery(GET_ALL_FILMS)

  useEffect(() => {
    document.title = title === '' ? 'Select Film' : title
  })

  if (error) {
    return <p>failed while fetching films: {error.message}</p>
  }

  if (loading) return null

  return (
    <>
      {title !== '' && <h1 style={{ textAlign: 'center' }}>{title}</h1>}

      {!activeFilm && (
        <h1 style={{ textAlign: 'center' }}>please select a film</h1>
      )}

      <MovieSelect
        activeId={id}
        updateActiveMovie={updateActiveMovie}
        films={data.allFilms.edges}
      />

      <Space value="one-and-half" />

      {activeFilm && <FilmInfo id={id} />}
    </>
  )
}

export default FilmPage
