import { BsBookmark } from 'react-icons/bs';
import { useState } from 'react';
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
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../common/firebase';

const AddComment = () => {
  // const [addCommentNickName, setAddCommentNickName] = useState('닉네임');

  const [githubText, setGithubText] = useState('');
  const [commentText, setCommentText] = useState('');

  const AddGithubText = (e) => {
    setGithubText(e.target.value);
  };

  const AddCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const AddCommentButton = async () => {
    console.log(db);
    await addDoc(collection(db, 'test'), {
      gihub: githubText,
      comment: commentText,
      date: Date.now(),
    });
    setGithubText('');
    setCommentText('');
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
                <AddInputFirst
                  placeholder="선택사항입니다."
                  onChange={AddGithubText}
                  value={githubText}
                />
              </AddGitInputDiv>
            </AddGitLink>
            <AddCommentText>
              <AddCommentDiv>댓글 </AddCommentDiv>
              <AddInputDiv>
                <AddInputTwo
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
  );
};

export default AddComment;
