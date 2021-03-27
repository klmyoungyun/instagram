import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export const HeaderIcon = (name) => (
  <Icon name={name} size={26} color="black" style={{marginRight: 24}} />
);
export const trimText = (text = '') =>
  text.length > 10 ? `${text.slice(0, 10)}...` : text;
