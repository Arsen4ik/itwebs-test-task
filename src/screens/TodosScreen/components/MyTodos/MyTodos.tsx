import { useModal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { AddToDoModalContent } from "./components";
import { useOptimistic, useState, useTransition } from "react";
import { ITodo } from "@/types";
import { getDefaultTodo } from "@/api/todos/lib/getDefaultTodo";
import { ISendNewTodoParams, sendNewTodo } from "@/api/todos";
import TodoList from "@/components/TodoList/TodoList";

const MyTodos = () => {
    const [todosState, setTodosState] = useState<ITodo[]>([]);

    const [isSendNewTodoPending, startSendNewTodoPending] = useTransition();

    const [todosOptimistic, setTodosOptimistic] = useOptimistic(todosState, (currentState, newTodo: typeof todosState[number]) => [newTodo, ...currentState]);

    const handleAddNewTodo = (params: ISendNewTodoParams) => {
        startSendNewTodoPending(async () => {
            setTodosOptimistic(getDefaultTodo(params.newTodoTitle + "...", !!params.picture));
            const newTodo = await sendNewTodo(params);
            setTodosState(prev => [newTodo, ...prev]);
        })
    }

    const todos = todosOptimistic;

    const { openModal } = useModal();

    const handleOpenAddToDoModal = () => {
        openModal({
            component: <AddToDoModalContent handleAddNewTodo={handleAddNewTodo} />
        })
    }

    return (
        <div className="flex flex-col gap-3">
            <Button
                className="w-fit"
                onClick={handleOpenAddToDoModal}
                disabled={isSendNewTodoPending}
            >
                add todo
            </Button>
            <TodoList todos={todos} />
            {!!todos.length && <hr />}
        </div>
    );
}

export default MyTodos;