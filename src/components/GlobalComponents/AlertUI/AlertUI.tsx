import React, { MouseEventHandler } from 'react';
import {
  AlertBody,
  AlertBox,
  TextBox,
  Title,
  BtnBox,
  ConfirmBtn,
} from './style';

// 공통 alert UI
const AlertUI: React.FC<{
  title: string;
  onClose: MouseEventHandler<HTMLElement>;
}> = (props) => {
  return (
    <AlertBody>
      <AlertBox>
        <TextBox>
          <Title>{props.title}</Title>
        </TextBox>
        <BtnBox>
          <ConfirmBtn onClick={props.onClose}>확인</ConfirmBtn>
        </BtnBox>
      </AlertBox>
    </AlertBody>
  );
};

export default AlertUI;
