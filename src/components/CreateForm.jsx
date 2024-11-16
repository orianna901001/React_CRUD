import { useState } from "react";

function CreateForm({ addTodo }) {
  const [content, setContent] = useState('');

  const submit = (e) => {
    e.preventDefault();
    addTodo(content);
    setContent('');
  };


  return (
    <form className="CreateForm"  onSubmit={submit}> 
      <input type="text" placeholder="輸入代辦事項" 
        value={content} 
        onChange={(e)=>{setContent(e.target.value)}} 
        />
      <button type="submit"> 加入 </button>
    </form>
  );
}

export default CreateForm