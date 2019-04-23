import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

function App() {
  return (
    <div className="App">
      <Query
        query={gql`
          query {
            allFilms {
              films {
                title
                id
                releaseDate
                characterConnection {
                  characters {
                    name
                    id
                  }
                }
              }
            }
          }
        `}
      >
        {({ data, error, loading }) => {
          console.log(data, error, loading)
          return <p>"hello world"</p>
        }}
      </Query>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  )
}

export default App
