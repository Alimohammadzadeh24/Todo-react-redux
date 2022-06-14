import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList : []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
        state.todoList.push(action.payload);

        const serializedState = JSON.stringify(state);
        localStorage.setItem('state' , serializedState);
    },
  },
});

export const { saveTodo } = todoSlice.actions;

export default todoSlice.reducer;
