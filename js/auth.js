import { Auth } from 'aws-amplify';

// 사용자 등록
await Auth.signUp({
  username: 'testuser',
  password: 'Test@1234',
  attributes: {
    email: 'test@example.com',
  },
});

// 로그인
await Auth.signIn('testuser', 'Test@1234');

// 로그아웃
await Auth.signOut();
