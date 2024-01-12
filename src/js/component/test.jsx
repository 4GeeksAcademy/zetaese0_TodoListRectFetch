

// TodoList component receives the value as a prop
import React from 'react';

const test  = () => {

    function traertareas(){

        fetch("https://playground.4geeks.com/apis/fake/todos/user/zetaese")
        .then((response)=>response.json() )
        .then((data)=>console.log(data) )
        
    }

   
    
      // Definir la función dentro del componente
      function nuevatarea ()  {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ label: "Pruebita" })
        };
    
        fetch('https://playground.4geeks.com/apis/fake/todos/user/zetaese', requestOptions)
          .then(response => response.json())
          .then(data => setPostId(data.id))
          .catch(error => console.error('Error:', error));
      };
    
  
  return (
    <div>
      <h2>Test</h2>
      <button onClick={traertareas}> Traer</button>
      <button onClick={nuevatarea}> Añadir</button>

    </div>
  );
};

export default test;