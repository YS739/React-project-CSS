import { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../common/firebase';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputGihub,
  AddInputContent,
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
  const [newGitLink, setNewGitLink] = useState('');
  const [newcommentt, setNewComment] = useState('');
  const usersCollectionRef = collection(db, 'users');

  const createUser = async (e) => {
    e.preventDefault();
    if (newcommentt !== '') {
      await addDoc(usersCollectionRef, {
        github: newGitLink,
        comment: newcommentt,
        date: Date.now(),
        userName: '심대호',
        userNameBar: 'l',
      });
      setNewGitLink('');
      setNewComment('');
    }
  };

  return (
    <AddCommentListAll>
      <AddCommentListWrap>
        <AddNickName>닉네임</AddNickName>
        <AddCommentListTwo>
          <AddCommentPlusGit>
            <AddGitLink>
              <AddGitText>Github Link </AddGitText>
              <AddGitInputDiv>
                <AddInputGihub
                  value={newGitLink}
                  onChange={(event) => {
                    setNewGitLink(event.target.value);
                  }}
                  placeholder="선택사항입니다."
                />
              </AddGitInputDiv>
            </AddGitLink>
            <AddCommentText>
              <AddCommentDiv>댓글 </AddCommentDiv>
              <AddInputDiv>
                <AddInputContent
                  value={newcommentt}
                  onChange={(event) => {
                    setNewComment(event.target.value);
                  }}
                />
              </AddInputDiv>
            </AddCommentText>
          </AddCommentPlusGit>
          <AddCommentBtnDiv>
            <AddCommentBtn onClick={createUser}>댓글등록</AddCommentBtn>
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
