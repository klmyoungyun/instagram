import React, {useLayoutEffect} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import styled from 'styled-components';

import Story from '../component/Story';
import {HeaderIcon} from '../Utility';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const StoryContainer = styled.View`
  height: 120px;
  width: 100%;
`;
const FeedContainer = styled.View`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
`;
const Header = styled.View`
  flex-direction: row;
`;
const Home = ({navigation}) => {
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
  return (
    <Container>
      <StoryContainer>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingStart: 5,
            paddingEnd: 5,
          }}>
          <Story
            url={'https://steemitimages.com/u/jaydih/avatar'}
            name={'name1'}
          />
          <Story
            url={'https://steemitimages.com/u/donekim/avatar'}
            name={'name2'}
          />
          <Story
            url={'https://steemitimages.com/u/lucky2015/avatar'}
            name={'name3'}
          />
          <Story
            url={'https://steemitimages.com/u/dorian-lee/avatar'}
            name={'name4'}
          />
          <Story
            url={'https://steemitimages.com/u/happyberrysboy/avatar'}
            name={'name5'}
          />
          <Story
            url={'https://steemitimages.com/u/tradingideas/avatar'}
            name={'name6'}
          />
          <Story
            url={'https://steemitimages.com/u/koyuh8/avatar'}
            name={'name7'}
          />
          <Story
            url={'https://steemitimages.com/u/goodhello/avatar'}
            name={'name8'}
          />
        </ScrollView>
      </StoryContainer>
      <FeedContainer>
        <Text> main area</Text>
      </FeedContainer>
    </Container>
  );
};

export default Home;
