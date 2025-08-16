import React, { useEffect, useState } from "react";
import { Badge, Card, Space } from "antd";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((newTodos) => setTodos(newTodos));
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <Badge.Ribbon text="Hippies" color={todo.completed === true ? "blue": 'red'}>
          <Card title={todo.title} size="small">
            {todo.completed === true ? "Completed": 'Pending'}
          </Card>
        </Badge.Ribbon>
      ))}
    </div>
  );
};

export default Dashboard;
