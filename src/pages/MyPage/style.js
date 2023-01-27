import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const MyPageContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90%;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;
export const MyInfoContainer = styled.div`
  padding-top: 65px;
  flex: 30%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NickNameContainer = styled.div`
  margin-bottom: 40px;

  @media screen and (max-width: 800px) {
    width: 430px;
  }
`;

export const InputCheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 63px;
`;

export const GithubContainer = styled.div``;

export const MyPageTagTitle = styled.div`
  font-weight: 600;
`;

export const MyInfoInput = styled.div`
  border: none;
  border-bottom: 0.6px solid #c6c6c6;
  min-width: 200px;
  width: 70%;
  margin: 20px 10px 20px 0;
  outline: none;
  flex: 80%;
`;

export const MyInfoEditButton = styled.button`
  border: 1px solid #205295;
  border-radius: 7px;
  color: #205295;
  background-color: #fff;
  font-weight: 600;
  padding: 5px 10px;
  margin-right: 20px;
  height: 35px;
  width: 50px;
  cursor: pointer;
  flex: 20%;

  &:hover {
    background: #205295;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    margin-right: 0px;
  }
`;

export const TabsList = styled(TabList)`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding-left: 0px;
`;
TabsList.tabsRole = 'TabList';

export const MyPageTabsContainer = styled(Tabs)`
  display: flex;
  flex-direction: column;
  flex: 70%;
  font-size: 18px;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin-top: 40px;
  }
`;

export const TabItem = styled(Tab)`
  width: 410px;
  height: 26px;
  margin-right: 4px;
  border: 1px solid #205295;
  border-radius: 7px;
  color: #205295;
  font-weight: 600;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &.is-selected {
    background: #205295;
    color: #fff;
  }
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 1300px) {
    width: 310px;
  }

  @media screen and (max-width: 1000px) {
    width: 200px;
  }
`;
TabItem.tabsRole = 'Tab';

export const TabsPanel = styled(TabPanel)`
  display: none;
  padding: 4px;

  &.is-selected {
    display: block;
  }
`;
TabsPanel.tabsRole = 'TabPanel';

export const TabContents = styled.div`
  border: 1px solid #205295;
  border-radius: 7px;
  width: 845px;
  height: 520px;
  padding: 10px 20px;
  overflow: scroll;
  margin-top: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    max-width: 645px;
  }

  @media screen and (max-width: 1000px) {
    max-width: 425px;
  }
`;
