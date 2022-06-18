import {createSlice} from '@reduxjs/toolkit';

export interface IUser {
  userAuth: {
    isLoggedIn: boolean;
    email: string | null;
    userName: string | null;
  };
}

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userName = action.payload.userName;
    },
    setSignOut: state => {
      state.email = null;
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = (state: IUser) => state.userAuth.isLoggedIn;
export const selectEmail = (state: IUser) => state.userAuth.email;
export const selectUserName = (state: IUser) => state.userAuth.userName;

export default authSlice.reducer;
