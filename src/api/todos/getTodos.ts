import { ITodo } from "@/types";
import { API, SERVICES } from "../api"
import { handleAxiosError } from "../handleAxiosError";

interface IParams {
    limit?: number;
}

export const getTodos = async (params: IParams = {}): Promise<ITodo[]> => {
    const { limit = 20 } = params;
    try {
        const { data } = await API.get(`/${SERVICES.todos}`, {
            params: { _limit: limit },
        });
        return data ?? [];
    } catch (e) {
        handleAxiosError(e);
        return []
    }
}