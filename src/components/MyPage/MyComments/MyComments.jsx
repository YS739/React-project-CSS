import {
  CommentContainer,
  CommentInfo,
  CommentNickName,
  CommentDate,
  CommentContents,
  GitHubIcon,
} from './style.js';
import { FaGithub } from 'react-icons/fa';
import { authService, db } from '../../../common/firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useState } from 'react';

const MyComments = () => {
  // 댓글 리스트
  const [comments, setComments] = useState([]);

  // 현재 유저
  const currentUser = authService.currentUser;

  // 유저 닉네임
  const userNickname = currentUser.displayName;

  const q = query(
    collection(db, 'comments'),
    where('userId', '==', currentUser.uid),
  );
  getDocs(q).then((querySnapshot) => {
    const commentList = [];
    querySnapshot.forEach((doc) => {
      commentList.push({
        userId: doc.data().userId,
        comment: doc.data().comment,
      });
    });
    setComments(commentList);
  });

  return (
    <div>
      {comments.map((x) => {
        return (
          <CommentContainer>
            <CommentInfo>
              <CommentNickName>{userNickname}</CommentNickName>
              <CommentDate>2023.01.20</CommentDate>
              <GitHubIcon href="https://github.com/" target="_blank">
                <FaGithub size={23} />
              </GitHubIcon>
            </CommentInfo>
            <CommentContents>
              clone coding하면서 refactoring 좀 해 봤어요 refactoring 좀 해
              봤어요 refactoring 좀 해 봤어요 ! clone coding하면서 refactoring
              좀 해 봤어요 refactoring 좀 해 봤어요 refactoring 좀 해 봤어요 !
            </CommentContents>
          </CommentContainer>
        );
      })}
    </div>
  );
};

export default MyComments;
