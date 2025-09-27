import { ITodo } from "@/types";
import { API, SERVICES } from "../api";
import { handleAxiosError } from "../handleAxiosError";
import { delay } from "@/lib";
import { getDefaultTodo } from "./lib/getDefaultTodo";
import { toast } from "sonner";

export interface ISendNewTodoParams {
    newTodoTitle: string;
    picture?: File;
}

export const sendNewTodo = async (params: ISendNewTodoParams): Promise<ITodo> => {
    const { newTodoTitle, picture } = params;

    const defaultTodoToReturn = getDefaultTodo(newTodoTitle, !!picture);

    try {
        const formData = new FormData();
        formData.append("newTodoTitle", newTodoTitle);
        if (picture) formData.append("picture", picture);

        // имитируем отправку запроса
        await delay();

        // типо запрос на добавление todo
        // const { data } = await API.post(`/${SERVICES.todos}`, formData, {
        //     headers: {
        //         "Content-Type": "multipart/form-data",
        //     },
        // });

        return defaultTodoToReturn;
    } catch (e) {
        toast("Не удалось добавить todo");
        handleAxiosError(e);
        return defaultTodoToReturn;
    }
}