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
        github: doc.data().github,
        date: doc.data().date,
      });
    });
    setComments(commentList);
  });

  return (
    <div>
      {comments.map((comment) => {
        return (
          <CommentContainer key={comment.id}>
            <CommentInfo>
              <CommentNickName>{userNickname}</CommentNickName>
              <CommentDate>{comment.date}</CommentDate>
              {comment.github.length > 0 ? (
                <GitHubIcon href={comment.github} target="_blank">
                  <FaGithub size={23} />
                </GitHubIcon>
              ) : (
                ''
              )}
            </CommentInfo>
            <CommentContents>{comment.comment}</CommentContents>
          </CommentContainer>
        );
      })}
    </div>
  );
};

export default MyComments;
