import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export const HeaderIcon = (name) => (
  <Icon name={name} size={24} color="black" style={{marginRight: 10, marginLeft: 15}} />
);
export const FeedIcon = (name) => (
  <Icon name={name} size={24} color="black" style={{marginRight: 15}} />
);
export const trimText = (text = '') =>
  text.length > 10 ? `${text.slice(0, 10)}...` : text;
