import './App.css';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';
import { fetchPosts } from './actions/posts';

/* 타입정의 */
type Props ={
  value: any;
  onIncrement : () => void;
  onDecrement : () => void;
}

interface Post {
  userId: Number;
  id: Number;
  title: String;

}


function App( {value, onIncrement , onDecrement}: Props) {

  // state
  const [todoValue, setTodoValue] = useState("");

  // 관리
  const counter =  useSelector((state: RootState) => state.counter);
  const todos = useSelector((state: RootState) => state.todos);
  const posts: Post[] = useSelector((state: RootState) => state.post);

  const dispathch = useDispatch();

  useEffect(()=>{
    dispathch(fetchPosts())
  },[dispathch])

  

  // 핸들링
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    setTodoValue(e.target.value);

  } 

  const addTodo = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispathch({type:"ADD_TODO", text: todoValue})
    setTodoValue("")
  }
  
  return (
    <div className='App'>
        Clicked: {counter} times
        <button onClick={onIncrement}>
          + 
        </button>
        <button onClick={onDecrement}>
          -
        </button>
        <ul>
          
          {todos.map((todo,index)=><li key={index}>{todo}</li>)}
        </ul>

        <form onSubmit={addTodo}>
          <input type='text' value={todoValue} onChange={handleChange}/>
          <input type='submit' value='입력' />
      </form>
      <ul>
          {posts.map((post, index)=> <li key={index}>{post.title}</li>)}
      </ul>
    </div>

 
  );
}

export default App;
