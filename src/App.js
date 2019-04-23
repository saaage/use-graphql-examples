import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom'
import SayHello from 'SayHello'
import FilmPage from 'FilmPage'
import c3po from 'assets/c3po.png'

const App = () => {
  return (
    <AppRoot>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        {/* eslint-disable-next-line */}
        <Link to="/hello">👋</Link>

        <span style={{ width: 24 }} />

        {/* eslint-disable-next-line */}
        <Link to="/film">
          <img src={c3po} alt="C3PO" style={{ height: 24, width: 24 }} />
        </Link>
      </div>

      <Switch>
        <Route path="/hello" component={SayHello} />
        <Route path="/film" component={FilmPage} />
      </Switch>
    </AppRoot>
  )
}
const AppRoot = styled.div.withConfig({ displayName: 'App' })`
  height: 100vh;
  padding: 16px;
  position: relative;
  width: 100%;
`
export default App
