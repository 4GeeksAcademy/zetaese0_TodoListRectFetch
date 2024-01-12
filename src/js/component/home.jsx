import React, { useEffect } from "react";

// Create your first component
const Home = () => {
  return <TodoListWithArray />;
};

const TodoListWithArray = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const ADD_NEW_VALUE_KEY = "Enter";

  const getToDos = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/zetaese"
      );
      if (response.ok) {
        const jsonData = await response.json();
        setTodoList(jsonData);
      } else {
        throw new Error("Error fetching todos");
      }
    } catch (error) {
      console.error("There was an error:", error.message);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  const addNewElement = async () => {
    if (!inputValue) return;

    const newToDoList = [...todoList, { label: inputValue, done: false }];

    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/zetaese",
        {
          method: "PUT",
          body: JSON.stringify(newToDoList),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error updating todos");
      }

      setTodoList(newToDoList);
      setInputValue("");
    } catch (error) {
      console.error("There was an error:", error.message);
    }
  };

  const deleteElementOnClick = (indexToDelete) => {
    const updatedTodoList = todoList.filter(
      (_, index) => index !== indexToDelete
    );
    updateTodoList(updatedTodoList);
  };

  const deleteObject = async () => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/zetaese",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting todos");
      }

      const postResponse = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/zetaese",
        {
          method: "POST",
          body: JSON.stringify([]),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!postResponse.ok) {
        throw new Error("Error resetting todos");
      }

      setTodoList([]);
    } catch (error) {
      console.error("There was an error:", error.message);
    }
  };

  const updateTodoList = async (updatedList) => {
    try {
      const response = await fetch(
        "https://playground.4geeks.com/apis/fake/todos/user/zetaese",
        {
          method: "PUT",
          body: JSON.stringify(updatedList),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error updating todos");
      }

      setTodoList(updatedList);
    } catch (error) {
      console.error("There was an error:", error.message);
    }
  };

  return (
    <>
      <div className="centerContent mb-5">
        <h1> MY TODO LIST </h1>
        <div className="input mt-5">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === ADD_NEW_VALUE_KEY && addNewElement()}
          />
          <button className="btn btn-success" onClick={addNewElement}>
            Add a task
          </button>
          {todoList.map((todoItem, index) => (
            <section key={index} style={{ display: "flex" }}>
              <p className="todoItem">{`${todoItem.label}`}</p>
              <button
                className="closeX"
                onClick={() => deleteElementOnClick(index)}
              >
                X
              </button>
            </section>
          ))}
          <button
            className="btn btn-danger"
            onClick={() => deleteObject()}
          >
            Delete all tasks
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
