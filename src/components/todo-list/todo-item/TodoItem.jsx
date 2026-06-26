import styles from './TodoItem.module.css';

function TodoItem({
    id,
    text,
    completed,
    onClickHandler
}) {
    return (
        <li onClick={() => onClickHandler(id)} className={`${styles.todoItem}${completed ? ` ${styles.completed}` : ''}`}>
            {text}
        </li>
    );
}

export default TodoItem;
