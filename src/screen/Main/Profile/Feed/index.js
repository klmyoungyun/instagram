import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {loadFeed} from '../../../../redux/feedSlice';

const ProfileFeed = () => {
  const memberId = useSelector((state) => state.userReducer);
  const feedList = useSelector((state) => state.feedReducer);

  useEffect(() => {
    loadFeed(memberId);
  }, []);
  
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text> feedArea</Text>
    </View>
  );
};

export default ProfileFeed;
