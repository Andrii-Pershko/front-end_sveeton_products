import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilled, handlePending, handleRejected } from './functions';
import initialStateAdmin from './initialStates';
import { autorizationAdmin } from './operations';

const adminSlice = createSlice({
  name: 'autorizationAdmin',
  initialState: initialStateAdmin,
  extraReducers: builder =>
    builder
      .addCase(autorizationAdmin.pending, handlePending)
      .addCase(autorizationAdmin.fulfilled, handleFulfilled)
      .addCase(autorizationAdmin.rejected, handleRejected),
});

export const adminReducer = adminSlice.reducer;
