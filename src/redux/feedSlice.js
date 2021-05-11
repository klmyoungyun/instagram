import {createSlice} from '@reduxjs/toolkit';
import api from '../components/api';

const feedSlice = createSlice({
  name: 'feedReducer',
  initialState: {
    profile: {
      name: 'user',
      username: 'username',
      profileImage: null,
      posts: null,
      follower: null,
      following: null,
      message: '',
    },
    profileFeedList: [
      {
        image:
          'http://file3.instiz.net/data/cached_img/upload/2020/10/28/16/93c9213653f94459b81d441dd3f54f85.jpg',
      },
      {
        image:
          'http://www.bokjitimes.com/news/photo/202002/22767_15736_3416.jpg',
      },
      {
        image:
          'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/11/PS20111200137.jpg',
      },
      {
        image:
          'https://dimg.donga.com/a/600/0/90/5/ugc/MLBPARK/Board/16/06/14/14/1606141488566.jpg',
      },
      
    ],
  },
  reducers: {
    getMyInfo(state, action) {
      state.profile = action.payload.profile;
    },
    getFeed(state, action) {
      state.profileFeedList = action.payload.profileFeedList;
    },
  },
});

export const {getProfile, getFeed} = feedSlice.actions;

export const loadProfile = (id) => async (dispatch) => {
  try {
    const {
      data: {profile},
    } = await api.getProfile(id);
    if (profile !== undefined) {
      dispatch(getMyInfo(profile));
    }
  } catch (e) {
    console.log('loadProfile Error');
  }
};

export const loadFeed = (id) => async (dispatch) => {
  try {
    const {
      data: {feedList},
    } = await api.getFeedList(id);
    if (feedList !== undefined) {
      dispatch(getFeed(feedList));
    }
  } catch (e) {
    console.log('cant load feedlist');
  }
};
export default feedSlice;
