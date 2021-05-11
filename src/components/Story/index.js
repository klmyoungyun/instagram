import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import PropTyes from 'prop-types';

const StoryContainer = styled.View`
  border-bottom-color: gray;
  border-bottom-width: 1px;
  background-color: white;
`;
const Container = styled.View`
  width: 72px;
  padding: 8px;
`;
const Name = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
const ThumbnailContainer = styled.View`
  width: 60px;
  height: 60px;
  border-width: 1px;
  border-color: gray;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
const Thumbnail = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

const Story = ({storyList}) => (
  <StoryContainer>
    <FlatList
      keyExtractor={(item, index) => `stroy${index}`}
      data={storyList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <Container>
          <TouchableOpacity>
            <ThumbnailContainer>
              <Thumbnail source={{uri: item.url}} />
            </ThumbnailContainer>
          </TouchableOpacity>
          <Name numberOfLines={1}>{item.name}</Name>
        </Container>
      )}
    />
  </StoryContainer>
);

Story.propTypes = {
  storyList: PropTyes.array.isRequired,
};

export default Story;
