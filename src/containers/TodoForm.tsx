import { useContext, useState } from 'react';
import { TodoContext } from './TodoProvider';
import TodoItem from './TodoItem';

  function TodoAddForm() {
    const { items, addTodo, deleteTodo } = useContext(TodoContext);
    const [todo, setTodo] = useState('');
  
    const handleInputChange = (event) => {
      setTodo(event.target.value);
    };
  
    const handleAddTodo = (event) => {
      event.preventDefault();
      if (todo.trim() !== '') {
        addTodo(todo);
        setTodo('');
      }
    };
  
    return (
      <div className='flexCol'>
        <form className='form flexCol' onSubmit={handleAddTodo}>
          <p className='title'>Todo App</p>
          <input
            type="text"
            className='itemInput'
            value={todo}
            onChange={handleInputChange}
            placeholder="Enter todo..."
          />
          <button type="submit" className="addItemButton">Add Todo</button>
        </form>
       {items.length >= 1 ? <TodoItem item={items}/> : null}
       {/* <TodoItem item={items}/> */}
      </div>
    );
  }

export default TodoAddForm;