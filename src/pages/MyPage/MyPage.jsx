import MyBookmark from '../../components/MyPage/MyBookmark/MyBookmark';
import MyComments from '../../components/MyPage/MyComments/MyComments';
import { Fragment } from 'react';

import {
  MyPageContainer,
  MyInfoContainer,
  MyPageTagTitle,
  MyInfoInput,
  MyInfoEditButton,
  NickNameContainer,
  GithubContainer,
  MyPageTabsContainer,
  InputCheckContainer,
  TabItem,
  TabsPanel,
  TabContents,
  TabsList,
} from './style.js';

const MyPage = () => {
  return (
    <Fragment>
      <MyPageContainer>
        {/* 닉네임, 깃허브 링크 수정 */}
        <MyInfoContainer>
          <NickNameContainer>
            <MyPageTagTitle>닉네임</MyPageTagTitle>
            <InputCheckContainer>
              <MyInfoInput type="text" />
              <MyInfoEditButton onClick={''}>수정</MyInfoEditButton>
            </InputCheckContainer>
          </NickNameContainer>
          <GithubContainer>
            <MyPageTagTitle>GitHub</MyPageTagTitle>
            <InputCheckContainer>
              <MyInfoInput type="text" />
              <MyInfoEditButton onClick={''}>수정</MyInfoEditButton>
            </InputCheckContainer>
          </GithubContainer>
        </MyInfoContainer>
        {/* 북마크, 내가 쓴 댓글 보기 */}
        <MyPageTabsContainer
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <TabsList>
            <TabItem>북마크</TabItem>
            <TabItem>내가 쓴 댓글</TabItem>
          </TabsList>
          <TabContents>
            <TabsPanel active-content id="BookMarkContent">
              <MyBookmark />
            </TabsPanel>
            <TabsPanel id="CommentContent">
              <MyComments />
            </TabsPanel>
          </TabContents>
        </MyPageTabsContainer>
      </MyPageContainer>
    </Fragment>
  );
};

export default MyPage;
