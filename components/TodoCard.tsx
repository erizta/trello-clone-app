import React from "react";

import { XCircleIcon } from "@heroicons/react/24/solid";
import { DraggableProvidedDraggableProps } from "react-beautiful-dnd";

type TodoCardProps = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDraggableProps | null | undefined;
};

const TodoCard = ({
  todo,
  id,
  index,
  innerRef,
  dragHandleProps,
  draggableProps,
}: TodoCardProps) => {
  return (
    <div
      className="space-y-2 bg-white rounded-md drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex items-center justify-between p-5">
        <p>{todo.title}</p>
        <button className="text-red-500 hover:text-red-600">
          <XCircleIcon className="w-8 h-8 ml-5" />
        </button>
      </div>

      {/* {imageUrl&& (
        
      )} */}
    </div>
  );
};

export default TodoCard;
