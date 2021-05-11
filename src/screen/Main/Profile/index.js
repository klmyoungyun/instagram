import React, {useEffect, useLayoutEffect} from 'react';
import {TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import {HeaderIcon} from '../../../components/Utility';
import {loadProfile} from '../../../redux/feedSlice';
import ProfileFeed from './Feed';
import ProfileHeader from './Header';
import ProfileTag from './Tag';

const width = Dimensions.get('window').width;
const Tab = createMaterialTopTabNavigator();

const Header = styled.View`
  flex-direction: row;
`;

const Profile = () => {
  const {memberId} = useSelector((state) => state.userReducer);
  const {profile} = useSelector((state) => state.feedReducer);
  const navigation = useNavigation();

  const addPost = () => navigation.navigate('addPost');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        backgroundColor: '#fff',
        elevation: 0,
      },
      headerTitle: `${profile.username}`,
      headerTitleAlign: 'left',
      headerTintColor: 'black',
      headerTitleStyle: {fontSize: 25},
      headerRight: () => (
        <Header>
          <TouchableOpacity onPress={addPost}>
            {HeaderIcon('plus-square')}
          </TouchableOpacity>
          <TouchableOpacity>{HeaderIcon('menu')}</TouchableOpacity>
        </Header>
      ),
    });
  }, []);

  useEffect(() => {
    loadProfile(memberId);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}>
      <ProfileHeader profileData={profile} />
      <Tab.Navigator
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
          scrollEnabled: true,
          style: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          tabStyle: {
            justifyContent: 'center',
            width: width / 2,
          },
          indicatorStyle: {
            height: 1,
            backgroundColor: 'black',
          },
        }}
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            if (route.name === 'Feed') {
              return <Material name="grid" size={23} color="black" />;
            } else if (route.name === 'Tag') {
              return <FontAwesome name="user-tag" size={20} color="black" />;
            }
          },
        })}>
        <Tab.Screen name="Feed" component={ProfileFeed} />
        <Tab.Screen name="Tag" component={ProfileTag} />
      </Tab.Navigator>
    </ScrollView>
  );
};

export default Profile;
