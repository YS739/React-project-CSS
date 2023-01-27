import React from 'react';
import styled from 'styled-components';

export default function CustomAddBtnAlertUI(props) {
  return (
    <ConfirmBody>
      <ConfirmBox>
        <TextBox>
          <ConfirmText>댓글을 입력해주세요</ConfirmText>
        </TextBox>
        <BtnBox>
          <ConfirmCancelBtn onClick={props.onClose}>확인</ConfirmCancelBtn>
        </BtnBox>
      </ConfirmBox>
    </ConfirmBody>
  );
}

const ConfirmBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ConfirmBox = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 10px;
  background-color: #ffffff;

  position: relative;
  bottom: 80px;
  box-shadow: 2px 2px 15px 2px #205295;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 25px;
`;

const ConfirmText = styled.p`
  font-size: 20px;
  font-weight: 550;
`;

const BtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const ConfirmCancelBtn = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #205295;

  background: none;
  border: none;

  cursor: pointer;
`;
