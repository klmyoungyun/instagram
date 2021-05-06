import {createSlice} from '@reduxjs/toolkit';
import api from '../components/api';

const userSlice = createSlice({
  name: 'userReducer',
  initialState: {memberId: null, isLoggedIn: false},
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.memberId = action.payload.memberId;
    },
  },
});
export const {logIn} = userSlice.actions;
export const userLogin = (form) => async (dispatch) => {
  try {
    const {
      data: {memberId},
    } = await api.login(form);
    console.log(memberId);
    if (memberId !== undefined) {
      dispatch(logIn(memberId));
    }
  } catch (e) {
    alert('wrong');
  }
};

export default userSlice;
