import React, {useEffect, useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity, FlatList} from 'react-native';
import styled from 'styled-components';

import Feed from '../../../components/Feed';
import Story from '../../../components/Story';
import {HeaderIcon} from '../../../components/Utility';
import {loadHomeFeedList, loadStoryList} from '../../../redux/homeSlice';

const Header = styled.View`
  flex-direction: row;
`;

const Home = ({navigation}) => {
  const {memberId} = useSelector((state) => state.userReducer);
  const {storyList, homeFeedList} = useSelector((state) => state.homeReducer);

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

  return (
    <FlatList
      keyExtractor={(item, index) => `home${index}`}
      data={homeFeedList}
      showsVerticalScrollIndicator={false}
      onEndReached={() => {
        loadHomeFeedList(memberId);
      }}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={<Story storyList={storyList} />}
      renderItem={({item, index}) => (
        <Feed
          id={index}
          name={item.name}
          image={item.image}
          like={item.like}
          description={item.description}
          comment={item.comment}
        />
      )}
    />
  );
};

export default Home;
