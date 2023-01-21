import styled from 'styled-components';

export const AddCommentListAll = styled.div`
  width: 100%;
  height: 20%;
  margin-left: 8%;
  margin-top: 1%;
  display: flex;
  justify-content: space-between;
`;

export const AddCommentListWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #205295;
  border-radius: 10px;

  width: 85%;
  height: 100%;
`;

export const AddCommentListTwo = styled.div`
  margin-left: 5%;
  margin-top: 2%;
  width: 100%;
  height: 100%;
`;

export const AddCommentPlusGit = styled.div`
  width: 100%;
  height: 50%;
`;

export const AddNickName = styled.div`
  width: 6%;
  margin-left: 2%;
  margin-top: 2%;
  font-weight: 500;
`;

export const AddGitLink = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

export const AddGitText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 12%;
  height: 50%;
  font-weight: 700;
`;

export const AddGitInputDiv = styled.div`
  width: 88%;
  height: 100%;
  margin-left: 1%;
`;

export const AddCommentText = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
`;

export const AddCommentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 13.5%;
  font-weight: 700;
`;

export const AddInputDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 1%;
`;

export const AddIcornBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: 50px;
  font-size: 30px;
  margin-right: 10%;
`;

export const AddInputFirst = styled.input`
  width: 95%;
  height: 50%;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  :focus-visible {
    outline: none;
  }
`;

export const AddInputTwo = styled(AddInputFirst)`
  height: 100%;
`;

export const AddCommentBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3.5%;
  margin-top: 2%;
`;

export const AddCommentBtn = styled.button`
  border: none;
  background-color: #205295;
  color: white;
  border-radius: 5px;
  width: 90px;
  height: 40px;
  cursor: pointer;
`;
