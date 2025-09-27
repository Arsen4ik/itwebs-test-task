// здесь пример ssr

import { getTodos } from "@/api/todos";
import { TodosScreen } from "@/screens";

const TodosPage = async () => {
    const [todosResult] = await Promise.allSettled([
        getTodos()
    ]);

    const todos = todosResult.status === 'fulfilled' ? todosResult.value : [];

    return (
        <TodosScreen todos={todos} />
    );
}

export default TodosPage;