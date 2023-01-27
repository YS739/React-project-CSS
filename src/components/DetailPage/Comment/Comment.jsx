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

export default function Comment({ user }) {
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

  const ToggleDropDown = (uid) => {
    const currentUid = authService.currentUser.uid;

    if (toggleBtn === false) {
      if (uid === currentUid) {
        setAreYouUser(true);
      }
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      if (uid === currentUid) {
        setAreYouUser(false);
      }
      setToggleBtn(false);
    }
  };

  const editHandler = (comment) => {
    setEditValue(comment);
    setEditBox(true);
  };

  //  TODO: 수정하고나서 완료 버튼 누를때 setTimeOust 설정해주기
  // 여기에다 업데이트로직 짜기
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
    <>
      <ListTitleSection>
        <CommentNickname>{user.username}</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>
          {new Date(user.date).toLocaleDateString('kr')}
        </CommentTime>
        <CommentGitIcon>
          <a href={user.github} target="_blank">
            <BsGithub />
          </a>
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
            <GrMoreVertical onClick={() => ToggleDropDown(user.uid)} />
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
                      onClick={() => completeHandler(user, editValue, user.uid)}
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
    </>
  );
}
