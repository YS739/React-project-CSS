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
import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  querySnapshot,
} from 'firebase/firestore';

export default function CommentList(
  githubText,
  setGithubText,
  commentText,
  setCommentText,
) {
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    getCommentList();
  }, []);

  const getCommentList = () => {
    const q = query(collection(db, 'test'));
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => {
        const commentListdata = {
          github: doc.data().githubText,
          comment: doc.data().commentText,
        };
        setGithubText(commentListdata.githubText);
        setCommentText(commentListdata.commentText);
      });
    });
  };

  const ToggleDropDown = () => {
    if (toggleBtn === false) {
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      setToggleBtn(false);
    }
  };

  return (
    <CommentListBody>
      <ListTitleSection>
        <CommentNickname>엘리짱</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>2022 10 30</CommentTime>
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
