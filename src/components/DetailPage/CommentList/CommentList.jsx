import { BsBookmark } from 'react-icons/bs';
import {
  IconWrap,
  CommentListWrap,
  CommentListAll,
  CommentListTwo,
  InputFirst,
  InputTwo,
  NickName,
  GitLink,
  Comment,
  CommentBtn,
  IcornBtn,
} from './style';

const CommentList = () => {
  return (
    <CommentListAll>
      <CommentListWrap>
        <NickName>개발자1</NickName>

        <CommentListTwo>
          <GitLink>
            Github Link <InputFirst placeholder="선택사항입니다." />
          </GitLink>
          <Comment>
            댓글 <InputTwo />
          </Comment>
          <CommentBtn>댓글등록</CommentBtn>
        </CommentListTwo>
      </CommentListWrap>
      <IconWrap>
        <IcornBtn>
          <BsBookmark />
        </IcornBtn>
      </IconWrap>
    </CommentListAll>
  );
};

export default CommentList;
