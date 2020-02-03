import React from 'react';

function ToDoList () {

    const todoList = [
        {id: 1, description: 'Estudar para heroway', done:false},
        {id: 2, description: 'Ir ao mercado', done:false},
        {id: 3, description: 'matar um dragão', done:false}
    ];

    const [todos, setTodos] = React.useState(todoList);

    function toggleTodo (todo) {
        debugger;
        const newTodos = todos.map((t) => {
            if (todo.id === t.id) {
                if (t.done === true) {
                    t.done = false;
                } else {
                    t.done = true;
                }
            }

            return t;
        });

        setTodos(newTodos);

    }

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li onClick= {() => toggleTodo(todo)}
                    style = { {textDecoration: todo.done === true ? 'line-through' : "non"}}
                    >
                        { todo.description }
                    </li>
                );
            })}
        </ul>
    );
}



export default ToDoList;
