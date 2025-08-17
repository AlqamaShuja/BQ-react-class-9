import React, { useEffect, useState } from "react";
import { Badge, Card, Space, Input } from "antd";
const { Search } = Input;

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getTodosData = (searchValue) => {
    console.log("Calling get Todos");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((newTodos) => {
        console.log(newTodos);
        
        const filteredData = newTodos.filter(todo => todo.title.includes(searchValue)) 
        console.log(filteredData);
        setTodos(filteredData)
      });
  };

  // koi bhi kam krna ho jb component render hony bd
  useEffect(() => {
    getTodosData(searchValue);
    //ascnansascn
    //ancnbsacbsa
  }, [searchValue]);
  

  return (
    <div>
      <Search
        placeholder="input search text"
        // onSearch={(value) => setSearchValue(value)}
        onChange={(event) => setSearchValue(event.target.value)}
        style={{ width: 200 }}
      />
      {todos.map((todo, index) => (
        <Badge.Ribbon
        key={index}
          text="Hippies"
          color={todo.completed === true ? "blue" : "red"}
        >
          <Card title={todo.title} size="small">
            {todo.completed === true ? "Completed" : "Pending"}
          </Card>
        </Badge.Ribbon>
      ))}
    </div>
  );
};

export default Dashboard;
