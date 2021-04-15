import React from 'react';

import '../../css/Todo.css';

export default function TodoListItem() {
  return (
    <section className='todo-list-item'>
      <input type='checkbox' id='todo-item'></input>
      <label htmlFor='todo-item'>This is the todo text</label>
      <button>Edit</button>
      <button>Delete</button>
    </section>
  )
}

//  .card {
//   /* Add shadows to create the "card" effect */
//   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
//   transition: 0.3s;
// }

// /* On mouse-over, add a deeper shadow */
// .card:hover {
//   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
// }