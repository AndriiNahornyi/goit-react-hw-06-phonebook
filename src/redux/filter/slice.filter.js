import { createSlice } from '@reduxjs/toolkit';
const initialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    filterContactAction: (_, action) => action.payload,
  },
});
export const { filterContactAction } = filterSlice.actions;
export default filterSlice.reducer;
