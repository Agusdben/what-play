import React from 'react'
import { Router, Route, Switch } from 'wouter'

import { GamesContextProvider } from './context/GamesContext'

import { Header } from './components/Header'
import { GameSearch } from './components/GameSearch'

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'

export const App = () => {
  return (
    <GamesContextProvider>
      <Router>
        <div id='app'>
          <Header />
          <GameSearch />

          <Switch>
            <Route path='/'>
              <Home />
            </Route>

            <Route path='/search/:keyword'>
              {(params) => <Search keyword={params.keyword} />}
            </Route>
            <Route path='/superpiripitiflautico'>
              <Login />
            </Route>
            <Route path='/:rest*' status={404}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>

    </GamesContextProvider>
  )
}
