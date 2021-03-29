import React, {useState, useEffect, useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

import {HeaderIcon} from '../../../component/Utility';
import ProfileHeader from './ProfileHeader';
import api from '../../../component/api';

const Header = styled.View`
  flex-direction: row;
`;
export default ({navigation}) => {
  const memberId = useSelector((state) => state.userReducer);

  const [userProfile, setUserProfile] = useState({
    name: 'default',
    profileImage: null,
    posts: null,
    follower: null,
    following: null,
    message: '',
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        backgroundColor: '#fff',
        elevation: 0,
      },
      headerTitle: `${userProfile.name}`,
      headerTitleAlign: 'left',
      headerTintColor: 'black',
      headerTitleStyle: {fontSize: 25},
      headerRight: () => (
        <Header>
          <TouchableOpacity>{HeaderIcon('plus-square')}</TouchableOpacity>
          <TouchableOpacity>{HeaderIcon('menu')}</TouchableOpacity>
        </Header>
      ),
    });
  }, []);

  useEffect(() => {
    const getUserInfo = async (memberId) => {
      try {
        const {data} = await api.getProfile(memberId);
        setUserProfile(data);
      } catch (e) {
        console.log('err');
      }
    };
    getUserInfo(memberId);
  }, []);
  return <ProfileHeader profileData={userProfile} />;
};
