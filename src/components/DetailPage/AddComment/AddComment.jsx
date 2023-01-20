import { BsBookmark } from 'react-icons/bs';
import {
  AddIconWrap,
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
} from './style';

const AddComment = () => {
  return (
    <AddCommentListAll>
      <AddCommentListWrap>
        <AddNickName>개발자1</AddNickName>

        <AddCommentListTwo>
          <AddGitLink>
            Add Github Link <AddInputFirst placeholder="선택사항입니다." />
          </AddGitLink>
          <AddCommentText>
            댓글 <AddInputTwo />
          </AddCommentText>
          <AddCommentBtn>댓글등록</AddCommentBtn>
        </AddCommentListTwo>
      </AddCommentListWrap>
      <AddIconWrap>
        <AddIcornBtn>
          <BsBookmark />
        </AddIcornBtn>
      </AddIconWrap>
    </AddCommentListAll>
  );
};

export default AddComment;
