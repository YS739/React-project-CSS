import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { collection, getDocs } from 'firebase/firestore';

import {
  CommentListBody,
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
import { BsGithub } from 'react-icons/bs';
import { GrMoreVertical } from 'react-icons/gr';

export default function CommentList() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const ToggleDropDown = () => {
    if (toggleBtn === false) {
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      setToggleBtn(false);
    }
  };

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docChanges.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <CommentListBody>
      <ListTitleSection>
        <CommentNickname>엘리짱</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>2023-01-20</CommentTime>
        <CommentGitIcon>
          <BsGithub />
        </CommentGitIcon>
      </ListTitleSection>
      <ListTextSection>
        <CommentText>
          클론 코딩 하면서 리팩토링 좀 해봤어요. 깃헙에서 확인해보세요
        </CommentText>
        <CommentTextIcon>
          <CommentIconBody>
            <GrMoreVertical onClick={ToggleDropDown} />
          </CommentIconBody>
          {toggleBtn ? (
            <UpdateDeleteBody>
              <CommentUpdateBtn>수정</CommentUpdateBtn>
              <CommentDeleteBtn>삭제</CommentDeleteBtn>
            </UpdateDeleteBody>
          ) : (
            <NoneDiv></NoneDiv>
          )}
        </CommentTextIcon>
      </ListTextSection>
    </CommentListBody>
  );
}
