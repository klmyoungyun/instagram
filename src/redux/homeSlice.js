import {createSlice} from '@reduxjs/toolkit';
import api from '../components/api';

const homeSlice = createSlice({
  name: 'homeReducer',
  initialState: {
    storyList: [
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example1',
      },
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example2',
      },
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example2',
      },
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example3',
      },
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example4',
      },
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example5',
      },
      {
        url: 'https://steemitimages.com/u/jaydih/avatar',
        name: 'example6',
      },
    ],
    homeFeedList: [
      {
        name: 'ime',
        image: [
          'http://file3.instiz.net/data/cached_img/upload/2020/10/28/16/93c9213653f94459b81d441dd3f54f85.jpg',
          'http://www.bokjitimes.com/news/photo/202002/22767_15736_3416.jpg',
        ],
        like: 12,
        description: 'test test',
        comment: 0,
      },
      {
        name: 'kim',
        image: [
          'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2020/11/PS20111200137.jpg',
          'http://www.bokjitimes.com/news/photo/202002/22767_15736_3416.jpg',
        ],
        like: 2,
        description: 'test test test',
        comment: 12,
      },
      {
        name: 'young',
        image: [
          'https://dimg.donga.com/a/600/0/90/5/ugc/MLBPARK/Board/16/06/14/14/1606141488566.jpg',
        ],
        like: 3,
        description: 'test test test',
        comment: 12333,
      },
    ],
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
    } = await api.getStory(id);
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
    } = await api.getHomeFeed(id);
    if (homeFeedList !== undefined) {
      dispatch(getHomeFeedList);
    }
  } catch (e) {
    console.log('loadHomeFeedList Error');
  }
};

export default homeSlice;
