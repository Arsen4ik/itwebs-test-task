import { MY_USER_ID } from "@/lib";
import { ITodo } from "@/types";

export const getDefaultTodo = (title: ITodo["title"], completed: ITodo["completed"]): ITodo => {
    return {
        id: Math.ceil(Math.random() * 10_000),
        title,
        userId: MY_USER_ID,
        completed,
    }
}