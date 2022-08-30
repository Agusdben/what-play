import React from 'react'
import { Router, Route, Switch } from 'wouter'

import { GamesContextProvider } from './context/GamesContext'

import { Header } from './components/Header'
import { GameSearch } from './components/GameSearch'
import { Footer } from './components/Footer'
import { Roll } from './components/Roll'

import { Home } from './pages/Home'
import { Search } from './pages/Search'
import { NotFound } from './pages/NotFound'

import './App.css'
export const App = () => {
  return (
    <GamesContextProvider>
      <Router>
        <div id='app'>
          <Header />
          <main className='app__container'>
            <GameSearch />
            <Roll />
            <Switch>
              <Route path='/'>
                <Home />
              </Route>

              <Route path='/search/:keyword'>
                {(params) => <Search keyword={params.keyword} />}
              </Route>

              <Route path='/:rest*'>
                <NotFound />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>

    </GamesContextProvider>
  )
}
