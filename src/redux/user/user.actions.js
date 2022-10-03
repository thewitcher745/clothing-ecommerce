export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const signOut = () => ({
  type: "SIGN_OUT",
});
