import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchToDos = createAsyncThunk("todo/fetchToDos", async () => {
  const response = await axios.get(
    "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do"
  );
  return response.data;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchToDos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchToDos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchToDos.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default todoSlice.reducer;
