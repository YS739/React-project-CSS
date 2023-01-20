import styled from 'styled-components';

export const CommentListAll = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20%;
`;

export const CommentListWrap = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  margin-left: 100px;
  margin-top: 10px;
  width: 85%;
`;

export const CommentListTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  margin-top: 15px;
`;

export const NickName = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  font-weight: 500;
`;

export const GitLink = styled.div`
  font-weight: 700;
`;

export const Comment = styled.div`
  margin-left: 50px;
  margin-top: 10px;
  font-weight: 700;
`;

export const IconWrap = styled.div`
  svg {
    font-size: 30px;
    margin-right: 30px;
    margin-top: 10px;
  }
`;

export const IcornBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  width: 60%;
`;

export const InputFirst = styled.input`
  padding: 5px;
  width: 825px;
  /* border-radius: 5px; */
`;

export const InputTwo = styled.input`
  margin-left: 5px;
  width: 830px;
  height: 60px;
  border-radius: 5px;
  border-color: blue;
`;

export const CommentBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: gray;
  color: white;
  border-radius: 5px;
  width: 10%;
  height: 22%;
  margin-left: 840px;
  margin-top: 10px;
  cursor: pointer;
`;
