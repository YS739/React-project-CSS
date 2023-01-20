import styled from 'styled-components';

export const AddCommentListAll = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

export const AddCommentListWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin-left: 8%;
  margin-top: 1%;
  width: 85%;
  height: 100%;
`;

export const AddCommentListTwo = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-left: 5%;
  margin-top: 15px;
`;

export const AddNickName = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  font-weight: 500;
`;

export const AddGitLink = styled.div`
  display: flex;
`;

export const AddCommentText = styled.div`
  display: flex;
`;

export const AddIconWrap = styled.div`
  svg {
    font-size: 30px;
    margin-right: 30px;
    margin-top: 10px;
  }
`;

export const AddIcornBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: 60%;
`;

export const AddInputFirst = styled.input`
  padding: 5px;
  width: 80%;
  /* border-radius: 5px; */
`;

export const AddInputTwo = styled.input``;

export const AddCommentBtn = styled.button`
  justify-content: center;
  align-items: center;
  border: none;
  background-color: gray;
  color: white;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
`;
