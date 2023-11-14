import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfielledRefresh,
  handleFulfilled,
  handlePending,
  handlePendingRefresh,
  handleRejected,
  handleRejectedRefresh,
} from './functions';
import initialStateAdmin from './initialStates';
import { autorizationAdmin, refreshAdmin } from './operations';

const adminSlice = createSlice({
  name: 'admin',
  initialState: initialStateAdmin,
  extraReducers: builder =>
    builder
      .addCase(autorizationAdmin.pending, handlePending)
      .addCase(autorizationAdmin.fulfilled, handleFulfilled)
      .addCase(autorizationAdmin.rejected, handleRejected)
      .addCase(refreshAdmin.pending, handlePendingRefresh)
      .addCase(refreshAdmin.fulfilled, handleFulfielledRefresh)
      .addCase(refreshAdmin.rejected, handleRejectedRefresh),
});

export const adminReducer = adminSlice.reducer;
