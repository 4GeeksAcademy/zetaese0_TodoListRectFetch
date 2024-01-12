import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const MyForm = () => {
  const [submittedValues, setSubmittedValues] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Fetch initial tasks when the component mounts
    fetchTasks();
  }, []);

  function fetchTasks() {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/zetaese")
      .then((response) => response.json())
      .then((data) => {
        const labels = data.map(task => task.label);
        setSubmittedValues(labels);
        console.log(labels);
      })
  };

  // const createTask = async (e) =>{
  //    {
  //     // Create a new task
  //      {
  //       method: 'POST';
  //       headers: {
  //         'Content-Type'; 'application/json'
  //       };
  //       body: JSON.stringify({ label: inputValue })
  //     }}
  //   };

      // Fetch updated tasks after creating a new one
      fetchTasks();

  //     setInputValue(''); // Clear the input field
  //   } catch (error) {
  //     console.error('Error creating task:', error);
  //   }
  // };

  function updateTask() {


    fetch('https://playground.4geeks.com/apis/fake/todos/user/agastonsosa', {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({      done: false,
          label: inputValue }
        )  })
        
  fetch('https://playground.4geeks.com/apis/fake/todos/user/zetaese', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }))
  }

 function handleSubmit () {

  console.log(submittedValues)
  updateTask()
 }

  //   if (submittedValues.length === 0) {
  //     // If there are no tasks, use POST to create a new task
  //      createTask();
  //   } else {
  //     // If there are existing tasks, use PUT to update the first task
  //      updateTask();
  //   }
  // };

  function onDeleteItem() {
    
      // Delete the task
       fetch(`https://playground.4geeks.com/apis/fake/todos/${taskId}`)
   
      ;
    }


      // Fetch updated tasks after deleting one

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit" disabled={!inputValue.trim()}>Submit form</button>
      </form>

      <TodoList submittedValues={submittedValues} onDeleteItem={onDeleteItem} />
    </div>
  );
};

export default MyForm;
