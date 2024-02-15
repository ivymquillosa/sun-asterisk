import React from 'react';
import TodoProvider from './TodoProvider';
import TodoAddForm from './TodoForm';

  function TodoApp() {
    return (
      <TodoProvider>
        < TodoAddForm/>
      </TodoProvider>
    );
    
}

export default TodoApp