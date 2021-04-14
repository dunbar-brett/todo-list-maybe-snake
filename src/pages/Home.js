import React from 'react';
import '../css/Home.css';

import Header from '../components/Header';
import TodoList from '../components/Todo/TodoList'

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <TodoList></TodoList>
      </main>
    </>
  )
}