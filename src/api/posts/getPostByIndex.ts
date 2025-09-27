import { API, SERVICES } from "../api";
import { handleAxiosError } from "../handleAxiosError";
import { IPost, Nullable } from "@/types";

export const getPostByIndex = async (index: number): Promise<Nullable<IPost>> => {
    try {
        const { data } = await API.get(`/${SERVICES.todos}/${index}`);
        return data;
    } catch (e) {
        handleAxiosError(e);
        return null;
    }
}