import React, { useState} from "react";

export const TodoContext = React.createContext();

function TodoProvider(props) {
  const [items, setitems] = useState([]);

  const addTodo = (item) => {
    setitems([...items, item]);
  };

  const deleteTodo = (index) => {
    const updatediItems = items.filter((_, i) => i !== index);
    setitems(updatediItems);
  };

  return (
    <TodoContext.Provider value={{ items, addTodo, deleteTodo }}>
      {props.children || null}
    </TodoContext.Provider>
  );
}

export default TodoProvider;

