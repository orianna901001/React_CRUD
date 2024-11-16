import { useState } from "react";
import CreateForm from "./createForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random(), isCompleted: true,isEditing:false },
    { content: "寫作業", id: Math.random(), isCompleted: false,isEditing:false },
    { content: "洗碗", id: Math.random(), isCompleted: false,isEditing:false },
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random(), isCompleted: false,isEditing:false }]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;  /// 這個條件會過濾掉待辦事項中 id 和傳入的 id 相等的項目，即刪除該 id 所對應的待辦事項。
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ///找到相同的id
          ? { ...todo, isCompleted: !todo.isCompleted }  
          : todo
      })
    );
  };


  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isEditing: !todo.isEditing }  ///更改狀態
          : todo;
      })
    );
  };
  
const editTodo=(id,newContent)=>{
  setTodos(todos.map((todo)=>
  {
    return todo.id===id
    ?{...todo,content:newContent,isEditing:false}  ///更改寫入內容以及狀態
    :todo
}))
}
  

return (
  <div className="wrapper">
    <h1>代辦事項</h1>
    <CreateForm addTodo={addTodo} />
    {todos.map((todo) => (
      <Todo
        toggleCompleted={toggleCompleted}
        toggleIsEditing={toggleIsEditing}
        editTodo={editTodo}
        todo={todo}
        key={todo.id}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
);
}


export default TodoWrapper;
