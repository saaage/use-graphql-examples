import gql from 'graphql-tag'

export default gql`
  query getFilmById($id: ID!) {
    film(id: $id) {
      title
      releaseDate
      director
      characterConnection {
        edges {
          node {
            name
            id
            height
            gender
            species {
              name
            }
            height
            homeworld {
              id
              name
            }
          }
        }
      }
    }
  }
`
