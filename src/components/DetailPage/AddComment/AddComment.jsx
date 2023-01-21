import { BsBookmark } from 'react-icons/bs';
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
  return (
    <AddCommentListAll>
      <AddCommentListWrap>
        <AddNickName>닉네임</AddNickName>
        <AddCommentListTwo>
          <AddCommentPlusGit>
            <AddGitLink>
              <AddGitText>Github Link </AddGitText>
              <AddGitInputDiv>
                <AddInputGihub placeholder="선택사항입니다." />
              </AddGitInputDiv>
            </AddGitLink>
            <AddCommentText>
              <AddCommentDiv>댓글 </AddCommentDiv>
              <AddInputDiv>
                <AddInputContent />
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
