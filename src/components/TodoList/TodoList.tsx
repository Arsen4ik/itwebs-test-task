import { ITodo } from "@/types";
import { FC } from "react";

interface Props {
    todos: ITodo[];
}

const TodoList: FC<Props> = ({ todos }) => {
    return (
        <ul className="flex flex-col gap-4">
            {todos.map(todo =>
                <li
                    key={`${todo.id}-${todo.userId}`}
                    className="flex gap-4 items-center"
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        readOnly
                        className="peer"
                    />
                    <p className='text-xl peer-checked:line-through'>{todo.title}</p>
                </li>
            )}
        </ul>
    );
}

export default TodoList;