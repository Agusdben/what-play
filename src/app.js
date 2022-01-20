import React from 'react'
import { Router, Route, Switch } from 'wouter'

import { GamesContextProvider } from './context/GamesContext'

import { Header } from './components/Header'
import { GameSearch } from './components/GameSearch'
import { Footer } from './components/Footer'

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'

import './App.css'
import { UpdateGame } from './pages/UpdataGame'
export const App = () => {
  return (
    <GamesContextProvider>
      <Router>
        <div id='app'>
          <Header />
          <main className='app__container'>
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

              <Route path='/superpiripitiflauticoactualizado'>
                <UpdateGame />
              </Route>

              <Route path='/:rest*' status={404}>
                <NotFound />
              </Route>

            </Switch>

            <Footer />
          </main>
        </div>
      </Router>

    </GamesContextProvider>
  )
}
