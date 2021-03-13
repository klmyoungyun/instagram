import axois from 'axois';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const onSubmit = async ({userId, password}) => {
  const {data} = await signIn({userId, password});
  if (success) {
    console.log(data);
  }
};
const signIn = async ({userId, password}) => {
  const {data} = await axois.post('http://localhost:4000/api/signin', {
    userId,
    password,
  });
  return data;
};