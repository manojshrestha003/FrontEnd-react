import TodoItem from "./TodoItem";

const TodoItems = ({todoItems1, onDeleteClick}) => {
    return (
        <>
            <div className="item-container">
                {todoItems1.map(item=>(
                     <TodoItem key={item} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />))}
                
            </div>
        </>
    );
}

export default TodoItems;











