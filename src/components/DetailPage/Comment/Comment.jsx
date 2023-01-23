import { useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { GrMoreVertical } from 'react-icons/gr';
import { db, authService } from '../../../common/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
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
  const [editValue, setEditValue] = useState(user.comment);
  const [toggleBtn, setToggleBtn] = useState(false);

  const currentUid = authService.currentUser.uid;

  //  수정, 삭제 토글 버튼
  const handleChange = (e) => {
    e.preventDefault();
    if (user.complete === true) {
      setEditValue(user.comment);
    } else {
      user.comment = '';
      setEditValue(e.target.value);
    }
  };

  const ToggleDropDown = () => {
    if (toggleBtn === false) {
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      setToggleBtn(false);
    }
  };

  const editHandler = (comment) => {
    setEditValue(comment);
    setEditBox(true);
  };

  // 여기에다 업데이트로직 짜기
  const completeHandler = async (user, comment) => {
    setEditBox(false);
    await updateDoc(doc(db, 'test', user.id), { comment: comment });
  };
  // 댓글 삭제
  const deleteHandler = async (id, uid) => {
    if (uid === currentUid) {
      const userDoc = doc(db, 'test', id);
      await deleteDoc(userDoc);
      console.log(uid, 'uid비교', id);
    }
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
          <input value={editValue} onChange={handleChange} />
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
                    editHandler(user.comment);
                  }}
                >
                  수정
                </CommentUpdateBtn>
              ) : (
                <CommentUpdateBtn
                  onClick={() => completeHandler(user, editValue)}
                >
                  완료
                </CommentUpdateBtn>
              )}

              <CommentDeleteBtn
                onClick={() => {
                  deleteHandler(user.id, user.uid);
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
