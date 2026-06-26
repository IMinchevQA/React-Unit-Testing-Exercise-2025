import styles from './TodoItem.module.css';

function TodoItem({
    id,
    text,
    completed,
    onClickHandler
}) {
    return (
        <li onClick={() => onClickHandler(id)}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
            className={styles.todoItem}>
            {text}
        </li>
    );
}

export default TodoItem;
