import React, { useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputGithub,
  AddInputContent,
  AddGitLink,
  AddCommentText,
  AddCommentBtn,
  AddIconBtn,
  AddGitInputDiv,
  AddCommentPlusGit,
  AddGitText,
  AddCommentDiv,
  AddInputDiv,
  AddCommentBtnDiv,
  BookMark,
} from './style';
import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import CommentList from '../CommentList/CommentList';
import { onAuthStateChanged } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../GlobalComponents/AlertUI/AlertUI';

const AddComment: React.FC = ({ video }: any) => {
  const [githubText, setGithubText] = useState('');
  const [commentText, setCommentText] = useState('');
  const [bookmark, setBookmark] = useState(false);
  const [changeColor, setChangeColor] = useState<string>(
    'rgba(32, 82, 149, 0.6)',
  );
  const AddGithubText = (e: ChangeEvent<HTMLInputElement>) => {
    setGithubText(e.target.value);
  };

  const AddCommentTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const [currentUserName, setCurrentUserName] = useState<
    string | null | undefined
  >('');
  const [currentUserUid, setCurrentUserUid] = useState<
    string | null | undefined
  >('');

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setCurrentUserName(authService.currentUser?.displayName);
        setCurrentUserUid(authService.currentUser?.uid);
      } else if (!user) {
        console.log('로그인 안됨.');
      }
    });

    // 북마크 정보 가져오기
    getBookmark();
  }, [currentUserName, currentUserUid]);

  // 데이터 올리기
  const NewDate = new Date().toLocaleDateString('kr');

  const AddCommentButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newComment: AddCommentJ = {
      comment: commentText,
      github: githubText,
      userName: currentUserName,
      videoId: video.id.videoId,
      userId: currentUserUid,
      createdAt: new Date(),
      date: NewDate,
    };
    if (!authService.currentUser) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'로그인을 해주세요.'} onClose={onClose} />;
        },
      });
      setGithubText('');
      setCommentText('');
    } else if (commentText !== '') {
      await addDoc(collection(db, 'comments'), newComment);
      setGithubText('');
      setCommentText('');
    } else if (commentText === '') {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'댓글을 입력해주세요.'} onClose={onClose} />;
        },
      });
    }
  };

  // 북마크 가져오기
  const getBookmark = async () => {
    const newId = currentUserUid + video.id.videoId;
    const docRef = doc(db, 'bookmark', newId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookmark(true);
      setChangeColor('#84D2C5');
    }
  };

  // 북마크 저장
  const updateBookmark = async () => {
    const newId = currentUserUid + video.id.videoId;
    if (bookmark === false) {
      // 북마크가 되어있지 않을 경우 DB에 추가
      await setDoc(doc(db, 'bookmark', newId), {
        userId: authService.currentUser?.uid,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.medium.url,
        videoTitle: video.snippet.title,
        date: Date.now(),
        channelTitle: video.snippet.channelTitle,
        video: video,
      });

      setBookmark(true);
      setChangeColor('#205295');
    } else {
      // 북마크가 되어있는 경우 DB에서 삭제
      const bookmarkDoc = doc(db, 'bookmark', newId);
      deleteDoc(bookmarkDoc);
      setBookmark(false);
      setChangeColor('rgba(32, 82, 149, 0.6)');
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
                  <AddInputGithub
                    placeholder="https:// 로 시작해주세요."
                    onChange={AddGithubText}
                    value={githubText}
                  />
                </AddGitInputDiv>
              </AddGitLink>
              <AddCommentText>
                <AddCommentDiv>댓글</AddCommentDiv>
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
        <AddIconBtn>
          <BookMark onClick={updateBookmark} style={{ color: changeColor }} />
        </AddIconBtn>
      </AddCommentListAll>

      <CommentList video={video} />
    </>
  );
};

export default AddComment;
