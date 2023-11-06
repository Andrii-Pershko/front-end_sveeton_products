export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.isAdmin = action.payload;
  state.token = action.payload.token;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
