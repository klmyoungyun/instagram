import axios from 'axios';

export const onSubmit = async ({userId, password}) => {
  const {data} = await signIn({userId, password});
  if (success) {
    console.log(data);
  }
};
const signIn = async ({userId, password}) => {
  const {data} = await axios.post('http://localhost:4000/api/signin', {
    userId,
    password,
  });
  return data;
};