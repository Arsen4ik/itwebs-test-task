import { IPost } from "@/types";
import { API, SERVICES } from "../api"
import { handleAxiosError } from "../handleAxiosError";

export const getPosts = async (): Promise<IPost[]> => {
    try {
        const { data } = await API.get(`/${SERVICES.posts}`);
        return data ?? [];
    } catch (e) {
        handleAxiosError(e);
        return []
    }
}