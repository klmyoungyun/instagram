import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components';
import Feed from '../../../component/Feed';
import Story from '../../../component/Story';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const StoryContainer = styled.View`
  height: 120px;
  width: 100%;
  border-bottom-color: gray;
  border-bottom-width: 0.5px;
`;
const FeedContainer = styled.View`
  width: 100%;
  height: 100%;
`;
  
const images = ['https://lh3.googleusercontent.com/proxy/CQ9c0CvR_Qt3FiKdj5ARvNE_8_8vwmM7-_P6e3ecactZhjnChkatAu6hsN6iDBBXtfGk8zbLS5sHdJ0Gl6e__d3sFTbL2X-afaiwC4sPvFOJh1a25G0',
'http://www.bokjitimes.com/news/photo/202002/22767_15736_3416.jpg',
'https://images.chosun.com/resizer/e_XfBvoOfR92cYym-TkRB4tsKqE=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/RSITTQF5C7LGXQXY5MZ56EGNHE.jpg',
'https://img.hankyung.com/photo/201811/01.18271154.1.jpg',
'https://img.huffingtonpost.com/asset/5ab0ca981f0000150316ae35.jpeg?ops=scalefit_630_noupscale'];

export default () => {

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
        </ScrollView>
      </StoryContainer>
      <FeedContainer>
        <ScrollView>
        <Feed id={1} name={'kim'} image={images} like={123} description={'goodgg211oodog'}></Feed>
        <Feed id={2} name={'le1231e'} image={images} like={31123} description={'go1231231og'}></Feed>
        <Feed id={3} name={'jee1233'} image={images} like={122233} description={'goodg2331goodog'}></Feed>
        </ScrollView>
      </FeedContainer>
    </Container>
  );
};
