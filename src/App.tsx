import React,{useState,useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from './reducers';
import { fetchPosts } from './actions/posts';



/* 타입정의 */

type Props ={
  value: any;
  onIncrement: ()=> void;
  onDecrement: ()=> void;
}

interface Post{
  userId: number;
  id: number;
  title: string;
}

/* ------------------------- */


function App({value, onIncrement, onDecrement }:Props) {
  
  const [todoValue, setTodoValue] = useState("");
  
  const counter = useSelector((state: RootState)=>state.counter)
  const todos: string[] = useSelector((state: RootState)=>state.todo) 
  const posts: Post[] = useSelector((state:RootState)=>state.posts);

  const dispatch = useDispatch();

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodoValue(e.target.value);
  }
  const addTodo = (e:React.ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispatch({type:"ADD_TODO", text : todoValue})
    setTodoValue("");
  }
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  


  return (
    <div className="App">
      Clicked: {counter}times
      <button type='button' onClick={onIncrement}>
        + 
      </button>
      <button type='button' onClick={onDecrement}>
        -
      </button>
      <ul>
        {todos.map((todo,index)=> <li key={index}>{todo}</li>)}
      </ul>

    <form onSubmit={addTodo}>
      <input type='text' value={todoValue} onChange={handleChange}/>
      <input type='submit'/>
    </form>

    <ul>
        {posts.map((post, index)=>(
          <li key={index}>{post.title}</li>
        ))}
    </ul>

    </div>
  );
}

export default App;
