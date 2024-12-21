import awsExports from './aws-exports.js';
Amplify.configure(awsExports);


// Amplify 설정
import Amplify, { Auth } from 'aws-amplify';
import awsExports from './aws-exports.js';

Amplify.configure(awsExports);

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const errorMessage = document.getElementById('error-message');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const user = await Auth.signIn(username, password);
      console.log('로그인 성공:', user);
      errorMessage.textContent = '로그인 성공!';
    } catch (err) {
      console.error('로그인 실패:', err);
      errorMessage.textContent = `로그인 실패: ${err.message}`;
    }
  });
});

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', async () => {
  try {
    await Auth.signOut();
    console.log('로그아웃 성공');
    errorMessage.textContent = '로그아웃 성공!';
    logoutButton.style.display = 'none';
  } catch (err) {
    console.error('로그아웃 실패:', err);
    errorMessage.textContent = `로그아웃 실패: ${err.message}`;
  }
});
