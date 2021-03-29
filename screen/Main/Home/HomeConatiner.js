import React, {useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import HomePresenter from './HomePresenter';
import {HeaderIcon} from '../../../component/Utility';

const Header = styled.View`
  flex-direction: row;
`;
export default ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        backgroundColor: '#fff',
        elevation:0
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

  return <HomePresenter navigation={navigation} />;
};
