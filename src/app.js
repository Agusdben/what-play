import React from 'react'
import { Route, Switch } from 'wouter'

import { GamesContextProvider } from './context/GamesContext'

import { Header } from './components/Header'
import { GameSearch } from './components/GameSearch'

import { Home } from './pages/Home'
import { Search } from './pages/Search'

export const App = () => {
  return (
    <GamesContextProvider>
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
        </Switch>

      </div>
    </GamesContextProvider>
  )
}
