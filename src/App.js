import './App.css';
import React,{useState} from 'react';
import { Button,Card,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
  
const Todo=({todo,index,markTodo,removeTodo,update})=>{
return(
  <div className='todo'>
    <span style={{textDecoration:todo.isDone ? "line-through":""}}>{todo.text}</span>
<div>
<Button variant ='outline-success'onClick={()=>markTodo(index)}>y</Button>{''}
<Button variant ='outline-danager' onClick={()=>removeTodo(index)}>x</Button>
<Button variant ='outline-success'onClick={()=>update(index)}>edit</Button>{''}

</div>
  </div>
);
}

const FormTodo=({addTodo})=>{
  const [value,setvalue]=useState("")
  const handlesubmit=e=>{
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setvalue("")
  };
  return (
    <Form onSubmit={handlesubmit}>
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e=>setvalue(e.target.value)} placeholder="Add new todo"/>

      </Form.Group>
      <Button variant='primary mb-3'type="submit">
        Submit
      </Button>
    </Form>
  );
}
function App() {
  const [todos,setTodos]=useState([
    {text:'sample',isDone:false}
  ]);
  const addTodo=text=>{
    const newTodos=[...todos,{text}]
    setTodos(newTodos)
  };
  const markTodo=index=>{
    const newtodos=[...todos];
    newtodos[index].isDone=true;
    setTodos(newtodos);
  };
  const removeTodo = index=>{
    const newtodos=[...todos];
    newtodos.splice(index,1);
    setTodos(newtodos);
  }
  const update=(index)=>{
    const newtodoitems=[...todos];
    const item=newtodoitems[index];
    let newItem=prompt(`Update ${item.text}`,item.text);
    let todoobeject={text:newItem,isDone:false};
    newtodoitems.splice(index,1,todoobeject);
    if (newItem===null||newItem===""){
      return;
    }else{
      item.text=newItem;
    }
    setTodos(newtodoitems);
  }
  return (
    <div className='app'>
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
         <FormTodo addTodo={addTodo} />
         <div>
          {todos.map((todo,index)=>(
            <Card>
              <Card.Body>
                <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} update={update}/>
              </Card.Body>
            </Card>
          ))}
         </div>
      </div>
    </div>
  )
   
}

export default App;
