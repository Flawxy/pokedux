import React, { useEffect } from 'react'
import './styles.css'
import { connect } from 'react-redux'

import { CLICK, showPokemonAction, catchPokemonAction } from './store/action'
import fetchPokemons from './store/fetchPokemons'

import GameBoy from './components/GameBoy'
import PokeList from './components/PokeList'
import Loader from './components/Loader'

const App = ({ click, fetchPokemons, pending, showPokemon, pokemons, catchPokemon }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  if (pending) {
    return <Loader />
  }

  return (
    <div className="App">
      {click}
      <GameBoy showPokemon={() => showPokemon(pokemons)} catchPokemon={catchPokemon} />
      <PokeList />
    </div>
  )
}

const mapStateToProps = ({ pending, pokemons }) => {
  return {
    pending,
    pokemons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPokemons: () => dispatch(fetchPokemons()),
    click: () => dispatch({ type: CLICK }),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: pokemons => dispatch(catchPokemonAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
