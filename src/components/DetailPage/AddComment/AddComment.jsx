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
          <div>
            <AddGitLink>
              <div>Add Github Link </div>
              <div>
                <AddInputFirst placeholder="선택사항입니다." />
              </div>
            </AddGitLink>
            <AddCommentText>
              <div>댓글 </div>
              <div>
                <AddInputTwo />
              </div>
            </AddCommentText>
          </div>
          <div>
            <AddCommentBtn>댓글등록</AddCommentBtn>
          </div>
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
