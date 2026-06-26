import { useState } from "react";
import TodoItem from "./todo-item/TodoItem";
import styles from './TodoList.module.css';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Write Unit Tests', completed: true },
    ]);

    const toggleHandler = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }



    return (
        <div className={styles.todoList}>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onClickHandler={toggleHandler} />
                ))}

            </ul>
        </div>
    );
}


export default TodoList;
