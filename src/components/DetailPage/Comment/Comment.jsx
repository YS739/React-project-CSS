import { useState } from 'react';
import { BsGithub, BsPencil, BsFillTrashFill, BsFlag } from 'react-icons/bs';
import { GrMoreVertical } from 'react-icons/gr';
import { db, authService } from '../../../common/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { confirmAlert } from 'react-confirm-alert';
import {
  ListTitleSection,
  CommentNickname,
  CommentNicknameBar,
  CommentTime,
  CommentGitIcon,
  ListContainer,
  ListTextSection,
  CommentText,
  CommentTextIcon,
  CommentUpdateBtn,
  CommentDeleteBtn,
  UpdateDeleteBody,
  CommentIconBody,
  CommentEditInput,
  NoneDiv,
  CommentPoliceBtn,
} from './style';
import CustomConfirmUI from './CustomConfirmUI';
import CustomPoliceUI from './CustomPoliceUI';
import React from 'react';

const Comment = ({ user }) => {
  const [editBox, setEditBox] = useState(false);
  const [editValue, setEditValue] = useState(user.comment);
  const [toggleBtn, setToggleBtn] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    setEditValue(e.target.value);
  };

  //  수정, 삭제 토글 버튼
  // 유저에 따라 버튼 다르게
  const [areYouUser, setAreYouUser] = useState(false);

  const ToggleDropDown = (userId) => {
    const currentUid = authService?.currentUser?.uid;

    if (toggleBtn === false) {
      if (userId === currentUid) {
        setAreYouUser(true);
      }
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      if (userId === currentUid) {
        setAreYouUser(false);
      }
      setToggleBtn(false);
    }
  };

  const editHandler = (comment) => {
    setEditValue(comment);
    setEditBox(true);
  };

  const completeHandler = async (user, comment) => {
    setEditBox(false);
    await updateDoc(doc(db, 'comments', user.id), { comment: comment });
    setToggleBtn(false);
  };

  // 댓글 삭제
  const deleteHandler = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <CustomConfirmUI onClose={onClose} id={id} />;
      },
    });
  };

  // 신고 버튼
  const ClickPolice = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <CustomPoliceUI onClose={onClose} id={id} />;
      },
    });
  };

  return (
    <ListContainer>
      <ListTitleSection>
        <CommentNickname>{user.userName}</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>{user.date}</CommentTime>
        <CommentGitIcon>
          {user.github !== '' ? (
            <a href={user.github} target="_blank" title={user.github}>
              <BsGithub svg color="black" />
            </a>
          ) : (
            <div></div>
          )}
        </CommentGitIcon>
      </ListTitleSection>
      <ListTextSection>
        {!editBox ? (
          <CommentText>{user.comment}</CommentText>
        ) : (
          <CommentEditInput
            value={editValue}
            onChange={handleChange}
            type="text"
          />
        )}
        <CommentTextIcon>
          <CommentIconBody>
            <GrMoreVertical onClick={() => ToggleDropDown(user.userId)} />
          </CommentIconBody>

          {toggleBtn ? (
            <>
              {areYouUser ? (
                <UpdateDeleteBody>
                  {!editBox ? (
                    <CommentUpdateBtn
                      onClick={() => {
                        editHandler(user.comment);
                      }}
                    >
                      <BsPencil />
                      수정
                    </CommentUpdateBtn>
                  ) : (
                    <CommentUpdateBtn
                      onClick={() =>
                        completeHandler(user, editValue, user.userId)
                      }
                    >
                      완료
                    </CommentUpdateBtn>
                  )}

                  <CommentDeleteBtn
                    onClick={() => {
                      deleteHandler(user.id);
                    }}
                  >
                    <BsFillTrashFill />
                    삭제
                  </CommentDeleteBtn>
                </UpdateDeleteBody>
              ) : (
                <UpdateDeleteBody>
                  <CommentPoliceBtn onClick={() => ClickPolice(user.id)}>
                    <BsFlag />
                    신고
                  </CommentPoliceBtn>
                </UpdateDeleteBody>
              )}
            </>
          ) : (
            <NoneDiv></NoneDiv>
          )}
        </CommentTextIcon>
      </ListTextSection>
    </ListContainer>
  );
};

export default Comment;
