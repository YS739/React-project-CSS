import styled from 'styled-components';

export const CommentListBody = styled.div`
  width: 90%;
  height: 13%;

  margin-top: 2%;
  margin-left: 8%;
`;

export const ListTitleSection = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  align-items: center;
`;

export const CommentNickname = styled.div`
  font-weight: 600;
`;

export const CommentNicknameBar = styled.div`
  font-size: 1.5rem;
  color: gray;
  margin-right: 1.5%;
  margin-left: 1.5%;
  margin-bottom: 0.5%;
`;

export const CommentTime = styled.div`
  color: gray;
  margin-right: 1.5%;
`;

export const CommentGitIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ListTextSection = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 1%;
`;

export const CommentTextIcon = styled.div`
  font-size: 1.4rem;
  margin-right: 1%;
  cursor: pointer;
`;
