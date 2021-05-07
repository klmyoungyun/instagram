import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {ScrollView} from 'react-native';

import Feed from '../../../components/Feed';
import Story from '../../../components/Story';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const StoryContainer = styled.View`
  flex: 0.2;
  border-bottom-color: gray;
  border-bottom-width: 0.4px;
`;
const FeedContainer = styled.View`
  flex: 0.8;
`;

const testImage1 = [
  'https://lh3.googleusercontent.com/proxy/CQ9c0CvR_Qt3FiKdj5ARvNE_8_8vwmM7-_P6e3ecactZhjnChkatAu6hsN6iDBBXtfGk8zbLS5sHdJ0Gl6e__d3sFTbL2X-afaiwC4sPvFOJh1a25G0',
  'http://www.bokjitimes.com/news/photo/202002/22767_15736_3416.jpg',
  'https://images.chosun.com/resizer/e_XfBvoOfR92cYym-TkRB4tsKqE=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RSITTQF5C7LGXQXY5MZ56EGNHE.jpg',
  'https://img.hankyung.com/photo/201811/01.18271154.1.jpg',
  'https://img.huffingtonpost.com/asset/5ab0ca981f0000150316ae35.jpeg?ops=scalefit_630_noupscale',
];

const HomePresenter = ({storyList, homeFeedList}) => {
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
          {storyList.map( (url, name) => <Story url ={url} name={name}/>)}
          <Story
            url={'https://steemitimages.com/u/jaydih/avatar'}
            name={'example'}
          />
        </ScrollView>
      </StoryContainer>
      <FeedContainer>
        <ScrollView>
          <Feed
            id={1}
            name={'testName'}
            image={testImage1}
            like={100}
            description={`test description test description test description test description test description test description`}></Feed>
        </ScrollView>
      </FeedContainer>
    </Container>
  );
};

HomePresenter.propTypes = {
  storyList: propTypes.array.isRequired,
  homeFeedList: propTypes.array.isRequired,
};

export default HomePresenter;
