import { useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrMoreVertical } from 'react-icons/gr';
import { db } from '../../../common/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import {
  ListTitleSection,
  CommentNickname,
  CommentNicknameBar,
  CommentTime,
  CommentGitIcon,
  ListTextSection,
  CommentText,
  CommentTextIcon,
  CommentUpdateBtn,
  CommentDeleteBtn,
  UpdateDeleteBody,
  CommentIconBody,
  NoneDiv,
} from './style';

export default function Comment({ user }) {
  const [editBox, setEditBox] = useState(false);
  const [editValue, setEditValue] = useState('');
  const [toggleBtn, setToggleBtn] = useState(false);

  const ToggleDropDown = () => {
    if (toggleBtn === false) {
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      setToggleBtn(false);
    }
  };

  const editHandler = (comment) => {
    setEditBox(true);
    setEditValue(comment);

    // console.log('id', id);
    // console.log(editBox);
  };

  // 여기에다 업데이트로직 짜기
  const completeHandler = () => {
    setEditBox(false);
  };
  // 데이터 삭제
  const deleteHandler = async (uid) => {
    const userDoc = doc(db, 'test', uid);
    await deleteDoc(userDoc);
    console.log(uid);
  };

  return (
    <>
      <ListTitleSection>
        <CommentNickname>{user.username}</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>{user.date}</CommentTime>
        <CommentGitIcon>
          <BsGithub />
        </CommentGitIcon>
      </ListTitleSection>
      <ListTextSection>
        {!editBox ? (
          <CommentText>{user.comment}</CommentText>
        ) : (
          <input value={editValue} />
        )}
        <CommentTextIcon>
          <CommentIconBody>
            <GrMoreVertical onClick={ToggleDropDown} />
          </CommentIconBody>
          {toggleBtn ? (
            <UpdateDeleteBody>
              {!editBox ? (
                <CommentUpdateBtn
                  onClick={() => {
                    editHandler(user.uid, user.comment);
                  }}
                >
                  수정
                </CommentUpdateBtn>
              ) : (
                <CommentUpdateBtn onClick={completeHandler}>
                  완료
                </CommentUpdateBtn>
              )}

              <CommentDeleteBtn
                onClick={() => {
                  deleteHandler(user.uid);
                }}
              >
                삭제
              </CommentDeleteBtn>
            </UpdateDeleteBody>
          ) : (
            <NoneDiv></NoneDiv>
          )}
        </CommentTextIcon>
      </ListTextSection>
    </>
  );
}
