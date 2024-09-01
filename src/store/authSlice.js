import { createSlice } from "@reduxjs/toolkit";

const usersInLS = localStorage.getItem("usersInLS")
  ? JSON.parse(localStorage.getItem("usersInLS"))
  : [];

const userInLS = localStorage.getItem("userInLS")
  ? JSON.parse(localStorage.getItem("userInLS"))
  : null;

const usersInLocalStorage = (data) => {
  localStorage.setItem("usersInLS", JSON.stringify(data));
};

const userInLocalStorage = (data) => {
  localStorage.setItem("userInLS", JSON.stringify(data));
};

const initialState = {
  users: usersInLS,
  user: userInLS,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpAct: (state, action) => {
      state.users.push(action.payload);
      usersInLocalStorage(state.users);
    },

    LogInAct: (state, action) => {
      const { email } = action.payload;
      const findUser = state.users.find((user) => user.email === email);

      if (findUser) {
        state.user = findUser;
        userInLocalStorage(state.user);
        state.error = null;
      } else {
        state.error = "user not found";
      }
    },

    LogOutAct: (state) => {
      state.user = null;
      userInLocalStorage(state.user);
    },
  },
});

export const { signUpAct, LogInAct, LogOutAct } = authSlice.actions;
export default authSlice.reducer;
