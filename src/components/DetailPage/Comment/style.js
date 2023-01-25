import styled from 'styled-components';

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
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 1%;
`;

export const CommentEditInput = styled.input`
  width: 90%;

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2.2px solid black;

  :focus {
    outline: none;
  }

  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 1%;
`;

export const CommentTextIcon = styled.div`
  width: 7%;

  font-size: 1.4rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentIconBody = styled.div`
  width: 25%;
  margin-right: 15%;
`;

export const UpdateDeleteBody = styled.div`
  width: 50%;

  margin-right: 25%;
`;

export const CommentDeleteBtn = styled.button`
  width: 90px;
  height: 35px;

  background-color: white;
  border-color: #205295;
  color: #205295;
  border-radius: 5px;
  cursor: pointer;

  font-size: 1.1rem;
  font-weight: 600;

  display: block;
  margin-bottom: 5px;

  :hover {
    background-color: #205295;
    color: white;
    border-radius: 5px;
    border: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const CommentUpdateBtn = styled(CommentDeleteBtn)``;
export const NoneDiv = styled.div`
  display: none;
`;
