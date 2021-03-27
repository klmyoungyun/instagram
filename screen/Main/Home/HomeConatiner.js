import React, {useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import HomePresenter from './HomePresenter';
import {HeaderIcon} from '../../../component/Utility';

const Header = styled.View`
  flex-direction: row;
`;
export default ({navigation}) => {
  const [feeds, setFeeds] = useState({
    data:{
      userFeed: [],
      userFeedError : null,
    }
  });
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {shadowColor: 'white'},
      headerTitle: 'instagram',
      headerTitleAlign: 'left',
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

  return <HomePresenter navigation = {navigation}/>;
};
