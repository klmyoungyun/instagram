import {createSlice} from '@reduxjs/toolkit';
import api from '../component/api';

const feedSlice = createSlice({
  name: 'feedReducer',
  initialState: {
    profile: {
      name: 'userName',
      profileImage: null,
      posts: null,
      follower: null,
      following: null,
      message: '',
    },
    feedList: [],
  },
  reducers: {
    getMyInfo(state, action) {
      state.profile = action.payload.profile;
    },
    getFeed(state, action) {
      state.feedList = action.payload.feedList;
    },
  },
});

export const {getProfile, getFeed} = feedSlice.actions;
export const loadProfile = (id) => async(dispatch) => {
    try{
        const {data:{profile}} = await api.getProfile(id);
        if(profile !== undefined){
            dispatch(getMyInfo(profile));
        }
    }catch(e){
        console.log("cant load profile")
    }
};

export const loadFeed = (id) => async dispatch =>{
    try{
        const {data:{feedList}} = await api.getFeedList(id);
        if(feedList !== undefined){
            dispatch(getFeed(feedList));
        }
    }catch(e){
        console.log('cant load feedlist');
    }
};
export default feedSlice;