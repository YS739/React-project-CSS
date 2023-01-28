import React, { MouseEventHandler } from 'react';
import {
  AlertBody,
  AlertBox,
  TitleBox,
  Title,
  BtnBox,
  ConfirmBtn,
} from './style';

const AlertUI: React.FC<{
  title: string;
  onClose: MouseEventHandler<HTMLElement>;
}> = (props) => {
  return (
    <AlertBody>
      <AlertBox>
        <TitleBox>
          <Title>{props.title}</Title>
        </TitleBox>
        <BtnBox>
          <ConfirmBtn onClick={props.onClose}>확인</ConfirmBtn>
        </BtnBox>
      </AlertBox>
    </AlertBody>
  );
};

export default AlertUI;
