import { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputGihub,
  AddInputContent,
  AddGitLink,
  AddCommentText,
  AddCommentBtn,
  AddIcornBtn,
  AddGitInputDiv,
  AddCommentPlusGit,
  AddGitText,
  AddCommentDiv,
  AddInputDiv,
  AddCommentBtnDiv,
} from './style';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import CommentList from '../CommentList/CommentList';
import { onAuthStateChanged } from 'firebase/auth';

const AddComment = ({ video }) => {
  const [githubText, setGithubText] = useState('');
  const [commentText, setCommentText] = useState('');

  const [username, setUsername] = useState('');

  const AddGithubText = (e) => {
    setGithubText(e.target.value);
  };

  const AddCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        getInfoUsername();
        console.log('Add Commnet 로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
  }, []);

  // 기존 user 정보 가져오기
  const getInfoUsername = () => {
    const q = query(
      collection(db, 'user'),
      where('uid', '==', authService.currentUser.uid),
    );
    getDocs(q).then((querySnapshop) => {
      const userInfo = [];
      querySnapshop.forEach((doc) => {
        userInfo.push({
          username: doc.data().username,
        });
        setUsername(userInfo[0].username);
      });
    });
  };

  // 데이터 올리기

  const AddCommentButton = async (e) => {
    e.preventDefault();
    if (commentText !== '') {
      await addDoc(collection(db, 'comments'), {
        comment: commentText,
        github: githubText,
        username: username,
        videoId: video.id.videoId,
        uid: authService.currentUser?.uid,
        date: Date.now(),
      });
      setGithubText('');
      setCommentText('');
    }
  };

  return (
    <>
      <AddCommentListAll>
        <AddCommentListWrap>
          <AddCommentListTwo>
            <AddCommentPlusGit>
              <AddGitLink>
                <AddGitText>Github Link </AddGitText>
                <AddGitInputDiv>
                  <AddInputGihub
                    placeholder="https:// 로 시작해주세요"
                    onChange={AddGithubText}
                    value={githubText}
                  />
                </AddGitInputDiv>
              </AddGitLink>
              <AddCommentText>
                <AddCommentDiv>댓글 </AddCommentDiv>
                <AddInputDiv>
                  <AddInputContent
                    onChange={AddCommentTextChange}
                    value={commentText}
                  />
                </AddInputDiv>
              </AddCommentText>
            </AddCommentPlusGit>
            <AddCommentBtnDiv>
              <AddCommentBtn onClick={AddCommentButton}>댓글등록</AddCommentBtn>
            </AddCommentBtnDiv>
          </AddCommentListTwo>
        </AddCommentListWrap>
        <AddIcornBtn>
          <BsBookmark />
        </AddIcornBtn>
      </AddCommentListAll>

      <CommentList video={video} />
    </>
  );
};

export default AddComment;
