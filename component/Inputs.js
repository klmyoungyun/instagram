import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TextContainer = styled.TextInput`
  height: 45px;
  min-height: auto;
  min-width: auto;
  color: #262626;
  border-color: #dbdbdb;
  border-width: 1px;
  border-radius: 7px;
  background-color: #fafafa;
  margin-bottom: 10px;
  padding: 9px 0px 7px 8px;
`;
const Inputs = ({value, keyboardType, placeholder, onChangeFn}) => (
  <TextContainer
    value={value}
    keyboardType={keyboardType}
    placeholder={placeholder}
    onChangeText={text => onChangeFn(text)}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeFn: PropTypes.func.isRequired,
};

export default Inputs;