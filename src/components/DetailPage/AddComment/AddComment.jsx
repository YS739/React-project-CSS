import { useEffect, useState } from 'react';
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
  BookMark,
} from './style';
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import CommentList from '../CommentList/CommentList';
import { onAuthStateChanged } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import CustomAddBtnAlertUI from './CustomAddBtnAlertUI';

const AddComment = ({ video }) => {
  const [githubText, setGithubText] = useState('');
  const [commentText, setCommentText] = useState('');
  const [userName, setUsername] = useState('');
  const [bookmark, setBookmark] = useState(false);
  const [changeColor, setChangeColor] = useState('rgba(32, 82, 149, 0.6)');
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

    // 북마크 정보 가져오기
    getBookmark();
  }, []);

  // 기존 user 정보 가져오기
  const getInfoUsername = () => {
    const q = query(
      collection(db, 'users'),
      where('userId', '==', authService.currentUser.userId),
    );
    getDocs(q).then((querySnapshop) => {
      const userInfo = [];
      querySnapshop.forEach((doc) => {
        userInfo.push({
          userName: doc.data().userName,
        });
        setUsername(userInfo[0].userName);
      });
    });
  };

  // 데이터 올리기
  const NewDate = new Date().toLocaleDateString('kr');

  const AddCommentButton = async (e) => {
    e.preventDefault();
    if (commentText !== '') {
      await addDoc(collection(db, 'comments'), {
        comment: commentText,
        github: githubText,
        userName: userName,
        videoId: video.id.videoId,
        userId: authService.currentUser?.userId,
        date: NewDate,
      });
      setGithubText('');
      setCommentText('');
    } else if (commentText === '') {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <CustomAddBtnAlertUI onClose={onClose} />;
        },
      });
    }
  };

  // 북마크 가져오기
  const getBookmark = async () => {
    const newId = authService.currentUser?.userId + video.id.videoId;
    const docRef = doc(db, 'bookmark', newId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setBookmark(true);
      setChangeColor('#205295');
    }
  };

  // 북마크 저장
  const updateBookmark = async () => {
    const newId = authService.currentUser?.userId + video.id.videoId;
    if (bookmark === false) {
      // 북마크가 되어있지 않을 경우 DB에 추가
      await setDoc(doc(db, 'bookmark', newId), {
        videoId: video.id.videoId,
        userId: authService.currentUser?.userId,
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
                  <AddInputGihub
                    placeholder="https:// 로 시작해주세요"
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
        <AddIcornBtn>
          <BookMark onClick={updateBookmark} style={{ color: changeColor }} />
        </AddIcornBtn>
      </AddCommentListAll>

      <CommentList video={video} />
    </>
  );
};

export default AddComment;
