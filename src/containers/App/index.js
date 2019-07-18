import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from '../../redux/reducers'

import RootRoute from './Routing/RootRoute'

class App extends Component {
  render() {
    const { history } = this.props
    const store = createStore(rootReducer, applyMiddleware(thunk))

    return (
      <Provider store={store}>
        <Router history={history}>
          <RootRoute />
        </Router>
      </Provider>
    )
  }
}

export default App
