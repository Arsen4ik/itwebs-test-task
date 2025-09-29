// здесь пример isr

import { getPostByIndex } from "@/api/posts";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
    params: Promise<{ postIndex: string }>;
}

export const revalidate = 60;

// если нужно:
// const cachedGetPostByIndex = unstable_cache(
//     async (index: number) => {
//         return getPostByIndex(index);
//     },
//     ["get-post-by-index"],
//     { revalidate: 5 }
// );
// в скором времени в нексте также появится директива "use cache"

const PostPage: FC<Props> = async ({ params }) => {
    const postIndex = (await params).postIndex;

    const [postResult] = await Promise.allSettled([
        getPostByIndex(+postIndex)
    ]);

    const post = postResult.status === 'fulfilled' ? postResult.value : null;

    if (!post) notFound();

    return (
        <pre>
            {JSON.stringify(post, null, 4)}
        </pre>
    );
};

export default PostPage;
