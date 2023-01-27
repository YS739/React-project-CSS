import styled from 'styled-components';

export default function CustomPoliceUI(props) {
  return (
    <ConfirmBody>
      <ConfirmBox>
        <TitleBox>
          <ConfirmTitle>신고 사유</ConfirmTitle>
        </TitleBox>
        <TextBox>
          <Textinput type="text" placeholder="신고 사유를 입력해주세요." />
        </TextBox>
        <BtnBox>
          <ConfirmCancelBtn onClick={props.onClose}>취소</ConfirmCancelBtn>
          <ConfirmDeleteBtn
            onClick={() => {
              alert('완료');
              props.onClose();
            }}
          >
            완료
          </ConfirmDeleteBtn>
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

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ConfirmTitle = styled.h2``;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Textinput = styled.input`
  width: 270px;
  height: 25px;

  font-size: 1.1rem;

  margin-top: 10px;
  margin-bottom: 10px;

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2.2px solid black;

  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 14px;
  }
`;

const BtnBox = styled.div`
  margin-top: 7%;
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

const ConfirmDeleteBtn = styled(ConfirmCancelBtn)``;