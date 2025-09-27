// здесь пример ssg

import { getTodoByIndex } from "@/api/todos";
import { notFound } from "next/navigation";
import { FC } from "react";

interface Props {
    params: Promise<{ todoIndex: string }>;
}

const TodoPage: FC<Props> = async ({ params }) => {
    const todoIndex = (await params).todoIndex;

    const [todoResult] = await Promise.allSettled([
        getTodoByIndex(+todoIndex)
    ]);

    const todo = todoResult.status === 'fulfilled' ? todoResult.value : null;

    if (!todo) notFound();

    return (
        <pre>
            {JSON.stringify(todo, null, 4)}
        </pre>
    );
};

export const generateStaticParams = async () => {
    return Array.from({ length: 10 }, (_, i) => ({
        todoIndex: String(i + 1),
    }));
};

export default TodoPage;
