import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { authService } from '../../common/firebase';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../components/GlobalComponents/AlertUI/AlertUI';

const navigate = useNavigate();

// google signin
export const googleSignUpHandler = () => {
  signInWithPopup(authService, new GoogleAuthProvider())
    .then(() => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'로그인 되었습니다.'} onClose={onClose} />;
        },
      });
      navigate('/');
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// git hub signin
export const githubSignUpHandler = () => {
  signInWithPopup(authService, new GithubAuthProvider())
    .then(() => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'로그인 되었습니다.'} onClose={onClose} />;
        },
      });
      navigate('/');
    })
    .catch((error) => {
      console.log(error.message);
    });
};
