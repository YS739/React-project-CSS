import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { BsBookmark } from 'react-icons/bs';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputFirst,
  AddInputTwo,
  AddNickName,
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

const AddComment = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };

    getUsers();
  }, []);

  return (
    <AddCommentListAll>
      <AddCommentListWrap>
        <AddNickName>닉네임</AddNickName>
        <AddCommentListTwo>
          <AddCommentPlusGit>
            <AddGitLink>
              <AddGitText>Github Link </AddGitText>
              <AddGitInputDiv>
                <AddInputFirst placeholder="선택사항입니다." />
              </AddGitInputDiv>
            </AddGitLink>
            <AddCommentText>
              <AddCommentDiv>댓글 </AddCommentDiv>
              <AddInputDiv>
                <AddInputTwo />
              </AddInputDiv>
            </AddCommentText>
          </AddCommentPlusGit>
          <AddCommentBtnDiv>
            <AddCommentBtn>댓글등록</AddCommentBtn>
          </AddCommentBtnDiv>
        </AddCommentListTwo>
      </AddCommentListWrap>
      <AddIcornBtn>
        <BsBookmark />
      </AddIcornBtn>
    </AddCommentListAll>
  );
};

export default AddComment;
