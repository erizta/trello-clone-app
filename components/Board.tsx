"use client";

import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  // const board = useBoardStore((state) => state.board);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    // <h1>test</h1>
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* rendering all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
