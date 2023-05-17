import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getphotos = createAsyncThunk("photos/getphotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
  const getimglist = await response.json();
  return getimglist;
});

export const galleryList = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  extraReducers: {
    [getphotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getphotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getphotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default galleryList.reducer;
