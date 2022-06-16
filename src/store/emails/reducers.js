import { createSlice } from '@reduxjs/toolkit';

export const emailSlice = createSlice({
  name: 'email',
  initialState: [],
  reducers: {
    addEmail: (state, action) => {
      state.unshift(action.payload);
    },
    setEmails: (state, action) => {
      state = action.payload;
    },
  },
});

export const { addEmail, setEmails } = emailSlice.actions;

export default emailSlice.reducer;
