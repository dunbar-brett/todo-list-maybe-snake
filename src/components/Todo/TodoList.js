import React from 'react';

import TodoListItem from './TodoListItem';
import TodoListEntry from './TodoListEntry';


export default function TodoList() {
  return (
    <>
      <p>This will have todo list entries</p>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListEntry></TodoListEntry>
    </>
  )
}