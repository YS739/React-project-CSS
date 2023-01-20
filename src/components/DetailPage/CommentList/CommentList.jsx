import {
  CommentListBody,
  ListTitleSection,
  CommentNickname,
  CommentNicknameBar,
  CommentTime,
  CommentGitIcon,
} from './style';

export default function CommentList() {
  return (
    <CommentListBody>
      <ListTitleSection>
        <CommentNickname>엘리짱</CommentNickname>
        <CommentNicknameBar>|</CommentNicknameBar>
        <CommentTime>2023-01-20</CommentTime>
        <CommentGitIcon></CommentGitIcon>
      </ListTitleSection>
    </CommentListBody>
  );
}
