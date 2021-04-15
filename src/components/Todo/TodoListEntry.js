import React from 'react';

export default function TodoListEntry() {
  return (
    <form className=''>
      <label htmlFor='todo-entry'>This is the todo text</label>
      <input type='text' id='todo-entry'></input>
      <button>Submit</button>
    </form>
  )
}