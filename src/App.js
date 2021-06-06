import './actions'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./actions";

function App() {
    const  todos=useSelector(state=>state.todos);
    const  loading=useSelector(state=>state.loading);
    const dispatch=useDispatch();


    useEffect(()=>{
        dispatch(loadTodos())
    },[])
  return (
    <div className="app">
        <div className="main_title">Список дел</div>
        <div className="title_cont zagolovok">
            <div className="todo_id">id</div>
            <div className="todo_title">title</div>
            <div className="todo_body">body</div>
        </div>
        {
            (loading?'идет загрузка...':todos.map(todo=>{
                return (
                    <div className="title_cont">
                        <div className="todo_id">{todo.id}</div>
                        <div className="todo_title">{todo.title}</div>
                        <div className="todo_body">{todo.body}</div>
                    </div>
                )
            }))

        }

    </div>
  );
}

export default App;
