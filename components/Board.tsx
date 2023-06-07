"use client";

import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";
const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  // const board = useBoardStore((state) => state.board);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [removed] = entries.splice(source.index, 1);
    }
  };

  return (
    // <h1>test</h1>
    <DragDropContext onDragEnd={(e) => handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(snapshot) => (
          <div
            className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-3 max-w-7xl"
            {...snapshot.droppableProps}
            ref={snapshot.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
