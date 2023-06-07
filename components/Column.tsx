import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";

type ColumnProps = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

const Column = ({ id, todos, index }: ColumnProps) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(snapshot) => (
        <div
          {...snapshot.draggableProps}
          {...snapshot.dragHandleProps}
          ref={snapshot.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(snapshot, provided) => (
              <div
                {...snapshot.droppableProps}
                ref={snapshot.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  provided.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between p-2 text-xl font-bold">
                  {idToColumnText[id]}
                  <span className="px-2 py-2 text-sm text-gray-500 bg-gray-200 rounded-full">
                    {todos.length}
                  </span>
                </h2>

                <div className="space-y-2">
                  {todos.map((todo, iDx) => (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}
                    >
                      {(snapshot) => (
                        <TodoCard
                          todo={todo}
                          index={index}
                          id={id}
                          innerRef={snapshot.innerRef}
                          draggableProps={snapshot.draggableProps}
                          dragHandleProps={snapshot.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}

                  {snapshot.placeholder}

                  <div className="flex items-end justify-end p-2">
                    <button className="text-green-500 hover:text-green-600">
                      <PlusCircleIcon
                      className="w-10 h-10"
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
