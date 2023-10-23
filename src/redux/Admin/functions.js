export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isAdmin = action.payload;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
