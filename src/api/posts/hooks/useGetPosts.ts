import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPosts } from "../getPosts";
import { postsQueryKeys } from "./lib/queryKeys";

export const useGetPosts = () => {
    return useQuery<Awaited<ReturnType<typeof getPosts>>>({
        queryKey: postsQueryKeys.getPosts(),
        queryFn: () => getPosts(),
        placeholderData: keepPreviousData,
        select: (data) => {
            if (!data) return [];
            return data;
        },
    });
};
