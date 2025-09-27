import { ReactNode } from "react";

export * from "./todo.types"
export * from "./post.types"

export type Nullable<T> = T | null;

export interface IChildren {
    children: Readonly<ReactNode>;
}