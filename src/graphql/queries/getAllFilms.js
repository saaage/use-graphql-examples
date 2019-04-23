import gql from 'graphql-tag'

export default gql`
  query allFilms {
    allFilms {
      edges {
        node {
          id
          title
        }
      }
      totalCount
    }
  }
`
