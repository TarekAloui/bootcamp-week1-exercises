import React from 'react'
import { Bar, HomeButton, TodoButton } from './styles'

const AppBarComponent = () => (
  <Bar>
    <HomeButton to="/">Home</HomeButton>
    <TodoButton to="/todo">Todos</TodoButton>
  </Bar>
)

export default AppBarComponent
