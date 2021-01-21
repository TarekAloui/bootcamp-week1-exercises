import React, { useState } from 'react'
import Checkbox from '../Checkbox'
import {
  ButtonStyled, TodoItem, TodoItemTitle, TodoListParent, EditIconStyled, DeleteIconStyled,
} from './styles'
import palette from '../../palette'

export const TodoItemComponent = ({ title, done }) => {
  const [checked, setChecked] = useState(done)
  const handleChange = event => {
    setChecked(event.target.checked)
  }

  return (
    <TodoItem>
      <label><Checkbox checked={checked} onChange={handleChange} /></label>
      <TodoItemTitle>{title}</TodoItemTitle>
      <ButtonStyled><EditIconStyled /></ButtonStyled>
      <ButtonStyled><DeleteIconStyled /></ButtonStyled>
    </TodoItem>
  )
}

const TodoListComponent = ({ todoItems }) => (
  <TodoListParent>
    {todoItems.map(todoItem => (
      <TodoItemComponent title={todoItem.title} key={todoItem.id} />
    ))}
  </TodoListParent>
)

export default TodoListComponent
