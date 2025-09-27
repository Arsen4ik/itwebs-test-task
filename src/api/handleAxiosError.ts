import { AxiosError } from "axios";

export const handleAxiosError = (e: unknown) => {
    const error = e as AxiosError;
    if (error?.request) {
        console.error('Ошибка запроса:', error.request);
    }
    if (error?.config?.url) {
        console.error('URL:', error.config.url);
    }
    if (error?.response) {
        console.error('Ошибка ответа:', error.response.status, error.response.data);
    }
    console.error(error);
}