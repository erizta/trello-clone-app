import { create } from "zustand";

interface BoardState {
  bears: Board;
  getBoard:()=>void
}


const useBoardStore = create((set) => ({
  bears: null,
  getBoard:()=>{}
}));
