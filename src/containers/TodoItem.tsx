import React, { useContext } from 'react';
import { TodoContext } from './TodoProvider';

function TodoItem() {
  const { items, deleteTodo } = useContext(TodoContext);

  const handleComplete = (index)=>{
    const task =document.getElementById(`task${index}`)?.classList.add('completedStyle')
  }

  return (
    <div className="singleTodoItem">
      <table>
        <thead>
          <tr>
            <th className='thead'>TODO</th>
            <th className='thead'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {items.map((itm, i)=> (
            <tr>
              <td>
                <p id={`task${i}`} className='taskItem'>{itm}</p>
              </td>
              <td className='actionCell'>
                <button className="markCompleteTodoItem" onClick={()=>handleComplete(i)}>Complete</button>
                <button className="removeTodoItem" onClick={()=>deleteTodo(i)}>Delete</button>
              </td>
            </tr> 
          ))}
       </tbody>
      </table>
    </div>
  );
}

export default TodoItem;