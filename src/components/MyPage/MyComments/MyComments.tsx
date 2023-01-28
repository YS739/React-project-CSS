import {
  CommentContainer,
  CommentInfo,
  CommentNickName,
  CommentDate,
  CommentContents,
  GitHubIcon,
} from './style';
import { FaGithub } from 'react-icons/fa';
import { authService, db } from '../../../common/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
interface CommentListJ {
  userId: string;
  comment: string;
  github: string;
  date: string;
  id?: string;
}

const MyComments = () => {
  // 댓글 리스트
  const [comments, setComments] = useState<CommentListJ[]>([]);
  const [userNickname, setUserNickname] = useState<string | null | undefined>(
    '',
  );
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // export const AuthContext = React.createContext<User | null>(null);

  // 현재 유저
  // const currentUser = authService.currentUser;

  // 유저 닉네임
  // const userNickname = currentUser.displayName;
  useEffect(() => {
    if (!authService.currentUser) return;
    setCurrentUser(authService.currentUser);
    setUserNickname(authService.currentUser.displayName);
  }, [currentUser, userNickname]);

  const q = query(
    collection(db, 'comments'),
    where('userId', '==', currentUser?.uid),
  );
  getDocs(q).then((querySnapshot) => {
    const commentList: any = [];
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
