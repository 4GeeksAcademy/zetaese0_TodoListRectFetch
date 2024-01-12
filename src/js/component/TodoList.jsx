

// TodoList component receives the value as a prop
import React from 'react';

const TodoList = ({ submittedValues, onDeleteItem }) => {
  return (
    <div>
      <h2>Todo List</h2>

        {submittedValues.map((value, index) => (
          <ul key={index}>
            {value}
            <button onClick={() => onDeleteItem(index)}>Delete</button>
          </ul>
        ))}
    </div>
  );
};

export default TodoList;