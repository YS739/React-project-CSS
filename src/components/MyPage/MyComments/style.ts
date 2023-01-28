import styled from 'styled-components';
import { color } from '../../../common/color';

export const CommentContainer = styled.div`
  cursor: pointer;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentNickName = styled.p`
  /* padding-right: 10px;
  border-right: 1px solid ${color.darkColor}; */
`;

export const CommentDate = styled.p`
  padding: 0 10px;
  color: #a0a0a0;
  font-size: 15px;
  letter-spacing: -1px;
`;

export const GitHubIcon = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const CommentContents = styled.p`
  margin: 0;
  padding-bottom: 25px;
  border-bottom: 1px solid ${color.darkColor};
`;
