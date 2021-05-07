import {createSlice} from '@reduxjs/toolkit';
import api from '../components/api';

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState: {
    storyList: [],
    homeFeedList: [],
  },
  reducers: {
    getStoryList(state, action) {
      state.storyList = action.payload.storyList;
    },
    getHomeFeedList(state, action) {
      state.homeFeedList = action.payload.homeFeedList;
    },
  },
});

export const {getStoryList, getHomeFeedList} = homeSlice.actions;

export const loadStoryList = (id) => async (dispatch) => {
  try {
    const {
      data: {storyList},
    } = await api.getStoryList(id);
    if (storyList !== undefined) {
      dispatch(getStoryList);
    }
  } catch (e) {
    console.log('loadStoryList Error');
  }
};

export const loadHomeFeedList = (id) => async (dispatch) => {
  try {
    const {
      data: {homeFeedList},
    } = await api.getHomeFeedList(id);
    if (homeFeedList !== undefined) {
      dispatch(getHomeFeedList);
    }
  } catch (e) {
    console.log('loadHomeFeedList Error');
  }
};

export default homeSlice;
