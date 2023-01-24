import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { authService, db } from '../../../common/firebase';
import { Test } from './style';

export default function TestLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setNickname] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeNickname = (e) => {
    setNickname(e.target.value);
  };
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setDoc(doc(db, 'testUser', res.user.uid), {
          uid: res.user.uid,
          email: email,
          password: password,
          username: username,
        });
        console.log('회원가입성공');
        setEmail('');
        setPassword('');
        setNickname('');
      })
      .catch(() => {
        console.log('err.message:');
      });
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        console.log('로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
  }, []);

  const loginHandler = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('로그인 성공');
      })
      .catch(() => {
        console.log('로그인 실패');
      });
  };

  const logoutHandler = () => {
    authService.signOut();
    console.log('로그아웃 됨');
  };
  return (
    <Test>
      <input
        placeholder="UserEmail"
        value={email}
        onChange={changeEmail}
      ></input>
      <input
        placeholder="password"
        value={password}
        onChange={changePassword}
      ></input>
      <input
        placeholder="UserEmail"
        value={username}
        onChange={changeNickname}
      ></input>
      <button onClick={handleSignUp}>회원가입</button>
      <button onClick={loginHandler}>로그인</button>
      <button onClick={logoutHandler}>로그아웃</button>
    </Test>
  );
}
