import type { RootState } from "@/redux/store";
import type { Itask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: Itask[];
  filter :"all" | "high" | "medium"
}

const initialState: InitialState = {
  tasks: [
    {
    id: "1",
    title: "Complete Task Management UI",
    description: "Design and implement the task list, filters, and drag-drop features.",
    dueDate: "2025-08-10",
    isComplated: false,
    priority: "High",
  },
  {
    id: "2",
    title: "Fix Login Page Error",
    description: "Resolve authentication bug when users log in with Google.",
    dueDate: "2025-08-05",
    isComplated: true,
    priority: "Low",
  },
  {
    id: "3",
    title: "Update README.md",
    description: "Add project setup instructions and feature list.",
    dueDate: "2025-08-08",
    isComplated: false,
    priority: "Low",
  }
  ],
  filter : "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});


export const selectTask = (state : RootState  ) =>{
  return state.toDo.tasks
}
export const selectFilter = (state : RootState  ) =>{
  return state.toDo.filter
}

export default taskSlice.reducer;
