import { ISendNewTodoParams, sendNewTodo } from "@/api/todos";
import { useModal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
    newTodoTitle: string;
    pictures: FileList;
}

interface Props {
    handleAddNewTodo: (params: ISendNewTodoParams) => void
}

const AddToDoModalContent: FC<Props> = ({ handleAddNewTodo }) => {
    const { closeLastModal } = useModal();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<IFormData>();

    const newTodoTitle = watch("newTodoTitle");

    const onSubmit = (data: IFormData) => {
        const { newTodoTitle, pictures = [] } = data;

        handleAddNewTodo({ newTodoTitle, picture: pictures[0] });

        closeLastModal();
    }

    return (
        <div className="self-center w-full flex flex-col gap-6 items-center justify-center">
            <p className="text-xl">add a new todo form</p>
            <form
                className="w-2/3 flex flex-col gap-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    id="todo-title"
                    placeholder="new todo title"
                    {...register("newTodoTitle", { required: "Title is required" })}
                />
                {errors?.newTodoTitle &&
                    <p
                        className="text-red-600"
                    >
                        {errors.newTodoTitle.message}
                    </p>}
                <Input
                    id="picture"
                    type="file"
                    {...register("pictures")}
                />
                <div className="flex flex-col gap-2 w-full">
                    <Button
                        type="reset"
                        variant={"ghost"}
                        className="w-full"

                    >
                        Reset
                    </Button>
                    <Button
                        type="submit"
                        disabled={!newTodoTitle}
                        className="w-full"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default AddToDoModalContent;