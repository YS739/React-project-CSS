import styled from 'styled-components';
import { colors } from '../../../common/colors';

export const CommentContainer = styled.div`
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentNickName = styled.p`
  color: ${colors.GREY};
  font-weight: 600;
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
  color: ${colors.GREY};
  font-size: 12px;
  :hover{
    color: ${colors.PURPLE}
  }
`;

export const CommentContents = styled.p`
  margin: 0;
  padding-bottom: 23px;
  border-bottom: 1px solid ${colors.PURPLE};
  font-size: 14px;
  color: ${colors.GREY};
  font-weight: 600;
`;
