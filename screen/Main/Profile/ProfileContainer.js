import React, {useEffect, useLayoutEffect} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import {HeaderIcon} from '../../../component/Utility';
import {loadFeed, loadProfile} from '../../../redux/feedSlice';
import ProfileFeed from './ProfileFeed';
import ProfileHeader from './ProfileHeader';
import ProfileTag from './ProfileTag';
import {ScreenStackHeaderBackButtonImage} from 'react-native-screens';

const Tab = createMaterialTopTabNavigator();

const Header = styled.View`
  flex-direction: row;
`;
export default ({navigation}) => {
  const memberId = useSelector((state) => state.userReducer);
  const {profile} = useSelector((state) => state.feedReducer);
  const feedList = useSelector((state) => state.feedReducer);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        backgroundColor: '#fff',
        elevation: 0,
      },
      headerTitle: `${profile.name}`,
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
    loadProfile(memberId);
    loadFeed(memberId);
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <ProfileHeader profileData={profile} />
      <Tab.Navigator
        tabBarOptions={{showIcon: true, showLabel: false, scrollEnabled: true}}>
        <Tab.Screen
          name="Feed"
          component={ProfileFeed}
          options={{
            tabBarIcon: () => <Material name="grid" size={26} color="black" />,
          }}
        />
        <Tab.Screen
          name="Tag"
          component={ProfileTag}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="user-tag" size={26} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </ScrollView>
  );
};
