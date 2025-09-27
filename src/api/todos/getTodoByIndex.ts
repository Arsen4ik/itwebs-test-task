import { ITodo } from "@/types/todo.types";
import { API, SERVICES } from "../api";
import { handleAxiosError } from "../handleAxiosError";
import { Nullable } from "@/types";

export const getTodoByIndex = async (index: number): Promise<Nullable<ITodo>> => {
    try {
        const { data } = await API.get(`/${SERVICES.todos}/${index}`);
        return data;
    } catch (e) {
        handleAxiosError(e);
        return null;
    }
}