import axios from "axios";

const SERVICES = {
    todos: "todos",
    posts: "posts",
} as const;

const BASE_URL = "https://jsonplaceholder.typicode.com";

const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export { API, BASE_URL, SERVICES };