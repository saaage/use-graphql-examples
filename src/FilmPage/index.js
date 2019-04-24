import React from 'react'
import { Query } from 'react-apollo'
import GET_ALL_FILMS from 'graphql/queries/getAllFilms'
import MovieSelect from 'FilmPage/MovieSelect'
import FilmInfo from 'FilmPage/FilmInfo'
import Space from 'Space'

/**
 * Film is component which displays movie information for a Star Wars film including title, rlease date, and cast.
 */
class FilmPage extends React.Component {
  state = {
    title: '',
    id: ''
  }

  componentDidMount() {
    document.title = this.state.title === '' ? 'Select Film' : this.state.title
  }

  componentDidUpdate(_, prevState) {
    if (prevState.title !== this.state.title) {
      if (this.state.title === '') {
        document.title = 'Select Film'
        return null
      }

      document.title = this.state.title
    }
  }

  updateActiveMovie = (id, title) => {
    this.setState({ id, title })
  }

  render() {
    const { title, id } = this.state
    const activeFilm = id !== ''

    return (
      <>
        <Query query={GET_ALL_FILMS}>
          {({ data, error, loading }) => {
            if (error) {
              return <p>failed while fetching films: {error.message}</p>
            }

            if (loading) return null

            return (
              <>
                {title !== '' && (
                  <h1 style={{ textAlign: 'center' }}>{title}</h1>
                )}

                {!activeFilm && (
                  <h1 style={{ textAlign: 'center' }}>please select a film</h1>
                )}

                <MovieSelect
                  activeId={id}
                  updateActiveMovie={this.updateActiveMovie}
                  films={data.allFilms.edges}
                />
              </>
            )
          }}
        </Query>

        <Space value="one-and-half" />

        {activeFilm && <FilmInfo id={id} />}
      </>
    )
  }
}

export default FilmPage
