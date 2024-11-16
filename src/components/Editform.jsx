import { useState } from "react";

function EditForm({todo,editTodo}){
    
  const [content, setContent] = useState(todo.content);

  const submit = (e) => {
    e.preventDefault();
    editTodo(todo.id,content)
  };


  return (
    <form className="CreateForm"  onSubmit={submit}> 
      <input type="text" placeholder="輸入代辦事項" 
        value={content} 
        onChange={(e)=>{setContent(e.target.value)}} 
        />
      <button type="submit"> 完成 </button>
    </form>
  );
}




export default EditForm