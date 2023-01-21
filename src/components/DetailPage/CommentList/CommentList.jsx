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
  NoneDiv,
} from './style';
import { BsGithub } from 'react-icons/bs';
import { GrMoreVertical } from 'react-icons/gr';
import { useState } from 'react';

export default function CommentList() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const ToggleDropDown = () => {
    if (toggleBtn === false) {
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      setToggleBtn(false);
    }
  };

  return (
    <CommentListBody>
      <ListTitleSection>
        <CommentNickname>엘리짱</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>2023-01-20</CommentTime>
        <CommentGitIcon>
          <BsGithub />
        </CommentGitIcon>
      </ListTitleSection>
      <ListTextSection>
        <CommentText>
          클론 코딩 하면서 리팩토링 좀 해봤어요. 깃헙에서 확인해보세요
        </CommentText>
        <CommentTextIcon>
          <CommentIconBody>
            <GrMoreVertical onClick={ToggleDropDown} />
          </CommentIconBody>
          {toggleBtn ? (
            <UpdateDeleteBody>
              <CommentUpdateBtn>수정</CommentUpdateBtn>
              <CommentDeleteBtn>삭제</CommentDeleteBtn>
            </UpdateDeleteBody>
          ) : (
            <NoneDiv></NoneDiv>
          )}
        </CommentTextIcon>
      </ListTextSection>
    </CommentListBody>
  );
}
