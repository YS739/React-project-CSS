import styled from 'styled-components';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { color } from '../../../common/color';

export const AddCommentListAll = styled.div`
  width: 100%;
  /* height: 25%; */
  /* margin-top: 1%; */
  display: flex;
  /* justify-content: space-between; */
  /* background-color: aliceblue; */
`;

export const AddCommentListWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid ${color.darkColor};
  border-radius: 10px;
  width: 100%;
  /* height: 100%; */
  padding: 20px;
`;

export const AddCommentListTwo = styled.div`
  /* margin-left: 5%;
  margin-top: 2%; */
  width: 100%;
  /* height: 100%; */
`;

export const AddCommentPlusGit = styled.div`
  /* width: 100%; */
  /* height: 50%; */
`;

export const AddNickName = styled.div`
  width: 6%;
  margin-left: 2%;
  margin-top: 2%;
  font-weight: 500;
`;

export const AddGitLink = styled.div`
  display: flex;
  margin-bottom: 10px;
  /* width: 100%; */
  /* height: 50%; */
`;

export const AddGitText = styled.div`
  display: flex;
  align-items: center;
  min-width: 90px;
  /* width: 100%; */
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: right;
`;

export const AddGitInputDiv = styled.div`
  width: 100%;
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
  align-items: center;
  min-width: 90px;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: right;
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
  /* margin-right: 10%; */
`;

export const AddInputGihub = styled.input`
  width: 100%;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 4px 8px;
  box-sizing: border-box;
  :focus-visible {
    outline: none;
  }
`;

export const AddInputContent = styled(AddInputGihub)`

`;

export const AddCommentBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  /* margin-right: 4.5%; */
  margin-top: 2%;
`;

export const AddCommentBtn = styled.button`
  width: 90px;
  height: 40px;
  cursor: pointer;

  background-color: white;
  color: ${color.darkColor};
  border: 2px solid ${color.darkColor};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;

  :hover {
    background-color: ${color.darkColor};
    color: white;
    border-radius: 5px;
    border: none;
  }
`;

export const BookMark = styled(BsFillBookmarkFill)`
  :hover {
    color: red;
  }
`;
