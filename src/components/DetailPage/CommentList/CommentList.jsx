import {
  CommentListBody,
  ListTitleSection,
  CommentNickname,
  CommentNicknameBar,
  CommentTime,
  CommentGitIcon,
  ListTextSection,
  CommentText,
} from './style';
import { BsGithub } from 'react-icons/bs';

export default function CommentList() {
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
      </ListTextSection>
    </CommentListBody>
  );
}
