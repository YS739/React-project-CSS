import { useEffect, useState, ChangeEvent } from 'react';
import { updateProfile } from 'firebase/auth';
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../../../common/firebase';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../GlobalComponents/AlertUI/AlertUI';
import {
  ModalBackground,
  ModalContainer,
  ModalTopItems,
  MyInfoInput,
  ButtonContainer,
  CancelButton,
  SaveButton,
  ErrorMessage,
} from './style';

type EditModalJ = (props: any) => any;

const EditModal: EditModalJ = ({
  setModalOpen,
  setContentInfo,
  setUserName,
  setGithub,
  updateGithub,
  updateNickname,
  currentUser,
}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // 닉네임 또는 깃허브 링크 유효성 검사
  const [inputValidation, setInputValidation] = useState(false);
  // 저장 버튼 활성화
  const [buttonValidation, setButtonValidation] = useState(true);
  // mutation 사용 - 닉네임 수정
  const docRef = doc(db, 'users', currentUser);
  const mutation = useFirestoreDocumentMutation(docRef);

  // 수정 취소
  const cancelEdit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <AlertUI title={'변경 사항이 없습니다.'} onClose={onClose} />;
      },
    });
    setModalOpen(false);
  };

  // 수정 저장
  // setContentInfo가 true: 닉네임 수정, false: github 수정
  const useSaveEdit = async () => {
    if (setContentInfo) {
      // 닉네임 수정
      updateProfile(currentUser, {
        displayName: currentInput,
      }).catch((error) => {
        console.log(error.message);
      });
      updateNickname(currentInput);
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <AlertUI title={'정보가 업데이트 되었습니다.'} onClose={onClose} />
          );
        },
      });
    } else {
      // github 수정
      mutation.mutate({ github: currentInput, userId: currentUser });
      updateGithub(currentInput);
    }
    setModalOpen(false);
  };

  // input 수정
  const checkInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCurrentInput(input);
    if (setContentInfo) {
      // 닉네임 입력
      if (input.length < 2 || input.length > 10) {
        setErrorMessage('2글자 이상, 10글자이하로 적어주세요.');
        setInputValidation(false);
      } else {
        setErrorMessage('');
        setInputValidation(true);
      }
    } else {
      // github 입력
      let regex = /^(http(s)?:\/\/)([^\/]*)(\.)(com|net|kr|my|shop)/gi;
      const trueOrFalse = regex.test(input);
      if (trueOrFalse === true || input.length === 0) {
        setErrorMessage('');
        setInputValidation(true);
      } else {
        setErrorMessage('유효한 주소를 적어주세요.');
        setInputValidation(false);
      }
    }
  };

  useEffect(() => {
    if (inputValidation) {
      setButtonValidation(false);
      return;
    }
    setButtonValidation(true);
  }, [inputValidation]);

  return (
    <ModalBackground>
      <ModalContainer>
        <ModalTopItems>
          {setContentInfo ? <h3>닉네임 변경</h3> : <h3>Github Link 변경</h3>}
        </ModalTopItems>
        <MyInfoInput
          onChange={checkInput}
          value={currentInput}
          placeholder={setContentInfo ? setUserName : setGithub}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <ButtonContainer>
          <CancelButton onClick={cancelEdit}>취소</CancelButton>
          <SaveButton disabled={buttonValidation} onClick={useSaveEdit}>
            저장
          </SaveButton>
          {mutation.isError && <p>{mutation.error.message}</p>}
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default EditModal;
