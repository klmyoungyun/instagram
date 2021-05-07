import React, {useEffect, useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import HomePresenter from './HomePresenter';
import {HeaderIcon} from '../../../components/Utility';
import {loadHomeFeedList, loadStoryList} from '../../../redux/homeSlice';

const Header = styled.View`
  flex-direction: row;
`;
const Home = ({navigation}) => {
  const {memberId} = useSelector((state) => state.userReducer);
  const {storyList} = useSelector((state) => state.homeReducer);
  const {homeFeedList} = useSelector((state) => state.homeReducer);
  
  useEffect(() => {
    loadStoryList(memberId);
    loadHomeFeedList(memberId);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        backgroundColor: '#fff',
        elevation: 0,
      },
      headerTitle: 'instagram',
      headerTitleAlign: 'left',
      headerTintColor: 'black',
      headerTitleStyle: {fontSize: 25},
      headerRight: () => (
        <Header>
          <TouchableOpacity>{HeaderIcon('plus-square')}</TouchableOpacity>
          <TouchableOpacity>{HeaderIcon('heart')}</TouchableOpacity>
          <TouchableOpacity>{HeaderIcon('send')}</TouchableOpacity>
        </Header>
      ),
    });
  }, []);

  return <HomePresenter storyList={storyList} homeFeedList={homeFeedList} />;
};

export default Home;
