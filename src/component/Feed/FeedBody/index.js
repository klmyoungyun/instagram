import React from 'react';
import {Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {FeedIcon} from '../../Utility';

const width = Dimensions.get('screen').width;

const MainImage = styled.Image`
  width: ${width}px;
  height: ${width}px;
`;

const ImageContainer = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
  width: ${width}px;
  height: ${width}px;
`;
const Icons = styled.View`
  margin-left: 10px;
  margin-top: 10px;
  flex-direction: row;
`;

const FeedBody = ({id, images}) => {
  const imageLength = images.length;
  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={imageLength > 1}
      >
        {images.map((image, index) => (
          <ImageContainer>
            <MainImage source={{uri: image}}></MainImage>
          </ImageContainer>
        ))}
      </ScrollView>

      <Icons>
        <TouchableOpacity>{FeedIcon('heart')}</TouchableOpacity>
        <TouchableOpacity>{FeedIcon('message-circle')}</TouchableOpacity>
        <TouchableOpacity>{FeedIcon('send')}</TouchableOpacity>
      </Icons>
    </>
  );
};

export default FeedBody;
