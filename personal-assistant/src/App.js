import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TodoPage from './Containers/TodoPage'
import HomePage from './Containers/HomePage'
import AppBarComponent from './Components/AppBarComponent'

const App = () => (
  <div>
    <AppBarComponent />
    <Switch>
      <Route path="/todo">
        <TodoPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
)

export default App
