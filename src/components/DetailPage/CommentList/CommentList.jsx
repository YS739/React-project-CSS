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
} from './style';
import { BsGithub } from 'react-icons/bs';
import { GrMoreVertical } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../common/firebase';

export default function CommentList() {
  const ToggleDropDown = async (data) => {
    //   const q = query(collection(db, 'test'));
    //   const queryData = await getDocs(q);
    //   queryData.forEach((doc) => {
    //     if (doc.id === data.id) {
    //     }
    //     console.log('버튼 아이디', toggleBtn.id);
    //     console.log(doc.id, '아이디 비교값', data.id);
    //     console.log(
    //       data.uid,
    //       '===',
    //       authService.currentUser.uid,
    //       '&&',
    //       data.id,
    //       '===',
    //       doc.id,
    //     );
    //   });
  };
  // 데이터 실시간 변경 확인
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'test'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(newComments);
    });

    return unsubscribe;
  }, []);

  // 수정
  const commnetListEditBtn = () => {};

  // 삭제
  const commnetListDeleteBtn = () => {};
  return (
    <>
      {comments.map((data) => (
        <CommentListBody key={data.id}>
          <ListTitleSection>
            <CommentNickname>{data.username}</CommentNickname>
            <CommentNicknameBar>|</CommentNicknameBar>
            <CommentTime>
              {new Date(data.date).toLocaleDateString('kr')}
            </CommentTime>
            <CommentGitIcon>
              <BsGithub />
            </CommentGitIcon>
          </ListTitleSection>
          <ListTextSection>
            <CommentText>{data.comment}</CommentText>
            <CommentTextIcon>
              <CommentIconBody>
                <GrMoreVertical onClick={() => ToggleDropDown(data)} />
              </CommentIconBody>

              <UpdateDeleteBody>
                <>
                  <CommentUpdateBtn onClick={commnetListEditBtn}>
                    수정
                  </CommentUpdateBtn>
                  <CommentDeleteBtn onClick={commnetListDeleteBtn}>
                    삭제
                  </CommentDeleteBtn>
                </>
              </UpdateDeleteBody>
            </CommentTextIcon>
          </ListTextSection>
        </CommentListBody>
      ))}
    </>
  );
}
