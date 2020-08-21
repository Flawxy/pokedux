import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import initialState from './initialState'

const store = createStore(reducer, initialState)

export default props => <Provider store={store} {...props} />
