import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {trimText} from '../Utility';

const Container = styled.View`
  width: 70px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 7px;
`;
const Name = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: gray;
`;
const ThumbnailContainer = styled.View`
  width: 70px;
  height: 70px;
  border-width: 1px;
  border-color: gray;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
`;
const Thumbnail = styled.Image`
  height: 58px;
  width: 58px;
  border-radius: 29px;
`;
export default ({id, url, name}) => {
  return (
    <Container>
      <TouchableOpacity>
        <ThumbnailContainer>
          <Thumbnail source={{uri: url}} />
        </ThumbnailContainer>
      </TouchableOpacity>
      <Name>{trimText(name)}</Name>
    </Container>
  );
};
