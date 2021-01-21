import React, { useState, useRef } from 'react'
import {
  ActionBarContainer, AddButton, ButtonStyled, SearchInput, TodoComponentContainer,
} from './styles'
import TodoListComponent from '../TodoListComponent'

const initTodoItems = [
  {
    id: 1,
    title: 'Clean Dishes',
    done: false,
  },
  {
    id: 2,
    title: 'Empty trash',
    done: false,
  },
  {
    id: 3,
    title: 'Take exam',
    done: false,
  },
  {
    id: 4,
    title: 'Clean room',
    done: false,
  },
  {
    id: 5,
    title: 'Write memo',
    done: false,
  },
]

const Todo = () => {
  const todoItems = useRef(initTodoItems)
  const [visibleTodoItems, setVisibleTodoItems] = useState(initTodoItems.filter(todo => !todo.done))
  const [query, setQuery] = useState('')


  const handleAdd = () => {
    todoItems.current = todoItems.current.concat({
      id: todoItems.current.length,
      title: query,
      done: false,
    })
    setQuery('')
    setVisibleTodoItems(todoItems.current.filter(todo => !todo.done))
  }

  const handleInputChange = event => {
    setQuery(event.target.value)
    console.log('query is', event.target.value)
    console.log('todos', todoItems.current)
    setVisibleTodoItems(todoItems.current.filter(todo => todo.title.toLowerCase().includes(event.target.value.toLowerCase()) && !todo.done))
    console.log('visible', visibleTodoItems)
  }

  return (
    <TodoComponentContainer>
      <ActionBarContainer>
        <SearchInput
          placeholder="Todo item"
          onChange={handleInputChange}
          value={query}
          ref={input => input && input.focus()}
        />
        <ButtonStyled onClick={handleAdd}><AddButton /></ButtonStyled>
      </ActionBarContainer>
      <TodoListComponent todoItems={visibleTodoItems} />
    </TodoComponentContainer>

  )
}

export default Todo
