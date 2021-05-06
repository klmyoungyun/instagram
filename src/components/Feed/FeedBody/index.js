import React, {useState} from 'react';
import {Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {FeedIcon} from '../../Utility';

const width = Dimensions.get('window').width;

const ImageContainer = styled.View`
  height: ${width}px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #d3d3d3;
`;
const MainImage = styled.Image`
  width: ${width}px;
  height: ${width}px;
`;
const BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px 12px;
`;
const LeftContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const MiddleContainer = styled.View`
  flex: 1;
`;
const RightContainer = styled.View`
  flex: 1;
  align-items: flex-end;
`;
const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Indicator = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin: 2px;
`;

const FeedBody = ({id, images}) => {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const imageLength = images.length;

  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={imageLength > 1}
        onScroll={(event) => {
          setIndicatorIndex(
            event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
          );
        }}>
        {images.map((url, index) => (
          <ImageContainer key={index}>
            <MainImage source={{uri: url}}></MainImage>
          </ImageContainer>
        ))}
      </ScrollView>

      <BottomContainer>
        <LeftContainer>
          <TouchableOpacity>{FeedIcon('heart', 15)}</TouchableOpacity>
          <TouchableOpacity>{FeedIcon('message-circle', 15)}</TouchableOpacity>
          <TouchableOpacity>{FeedIcon('send', 15)}</TouchableOpacity>
        </LeftContainer>
        <MiddleContainer>
          {imageLength > 1 ? (
            <IndicatorContainer>
              {images.map((url, index) => (
                <Indicator
                  key={index}
                  style={{
                    backgroundColor:
                      index <= indicatorIndex && indicatorIndex < index + 1
                        ? '#3796EF'
                        : '#D3D3D3',
                  }}></Indicator>
              ))}
            </IndicatorContainer>
          ) : null}
        </MiddleContainer>
        <RightContainer>
          <TouchableOpacity>{FeedIcon('bookmark', 0)}</TouchableOpacity>
        </RightContainer>
      </BottomContainer>
    </>
  );
};

FeedBody.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
};

export default FeedBody;
