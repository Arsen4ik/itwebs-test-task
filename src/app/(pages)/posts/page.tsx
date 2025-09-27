// здесь пример csr

"use client"

import { useGetPosts } from "@/api/posts";

const PostsPage = () => {
    const { data: posts, isPending } = useGetPosts();

    if (isPending) return "🌀"

    if (!posts?.length) return "-"

    return (
        <pre>
            {JSON.stringify(posts, null, 4)}
        </pre>
    );
};

export default PostsPage;