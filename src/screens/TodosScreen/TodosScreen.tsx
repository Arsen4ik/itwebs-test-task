"use client"

import { ITodo } from "@/types";
import { FC } from "react";
import MyTodos from "./components/MyTodos/MyTodos";
import TodoList from "@/components/TodoList/TodoList";

interface Props {
    todos: ITodo[];
}

const TodosScreen: FC<Props> = ({ todos }) => {
    return (
        <main className="flex flex-col gap-12 p-18">
            <h1 className="text-4xl">Todos</h1>
            <section className="flex flex-col gap-6">
                <MyTodos />
                <TodoList todos={todos} />
            </section>
        </main>
    );
}

export default TodosScreen;