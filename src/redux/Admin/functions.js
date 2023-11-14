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

export const handlePendingRefresh = (state, _) => {
  state.refreshAdminLoading = true;
};
export const handleFulfielledRefresh = (state, action) => {
  state.refreshAdminLoading = false;
  state.isAdmin = action.payload;
};
export const handleRejectedRefresh = (state, _) => {
  state.refreshAdminLoading = false;
  state.error = false;
};
