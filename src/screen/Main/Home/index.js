import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

import HomePresenter from './HomePresenter';
import {HeaderIcon} from '../../../components/Utility';

const Header = styled.View`
  flex-direction: row;
`;
const Home = ({navigation}) => {

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

export default Home;