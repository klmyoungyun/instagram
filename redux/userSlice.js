import {createSlice} from '@reduxjs/toolkit';
import api from '../api';

const userSlice = createSlice({
  name: 'userReducer',
  initialState: {member_id: null, isLoggedIn: false},
  reducers: {
    logIn(state, action) {
      console.log(action);
      console.log(state);
      state.isLoggedIn = true;
      state.member_id = action.payload.member_id;
      console.log(state);
    },
  },
});
export const {logIn} = userSlice.actions;
export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: {member_id},
    } = await api.login(form);
    if (member_id && token) {
      dispatch(logIn({member_id}));
    }
  } catch (e) {
    alert('잘못된 아이디, 비밀번호');
  }
};

export default userSlice;
