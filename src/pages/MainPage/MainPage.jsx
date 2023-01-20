import { Fragment } from 'react';
import styled from 'styled-components';
import VideoList from '../../components/MainPage/VideoList';
import { VscSearch } from 'react-icons/vsc';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import MultipleItems from '../../components/MainPage/Category/Category';

const MainPage = () => {
  return (
    <Fragment>
      <SearchSection>
        <Searchbox>
          <VscSearch />
          {/* TODO: 인풋 내부 보더 없에기 */}
          <input type="text" placeholder="검색어를 입력해주세요." />
        </Searchbox>
      </SearchSection>
      {/* FIXME: 캐러셀 왜 안돼.. */}
      {/* <MultipleItems /> */}
      <CategorySection>
        <CategoryBox>
          <SideIcons>
            <MdChevronLeft style={{ fontSize: 50 }} />
          </SideIcons>

          <Categories>
            <Category>All</Category>
            <Category>HTML</Category>
            <Category>CSS</Category>
            <Category>Javascript</Category>
            <Category>React</Category>
            <Category>ReactNative</Category>
            <Category>Typescript</Category>
          </Categories>
          <SideIcons>
            <MdChevronRight style={{ fontSize: 50 }} />
          </SideIcons>
        </CategoryBox>
      </CategorySection>
      <VideoList />
    </Fragment>
  );
};

export default MainPage;

// 검색창
export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const Searchbox = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;

  input {
    border: none;
    width: 450px;
    height: 40px;
    padding-left: 10px;
  }
`;

// 카테고리
export const CategorySection = styled(SearchSection)``;

export const CategoryBox = styled.div`
  width: 900px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const SideIcons = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: center;
`;

export const Category = styled.div`
  width: 95px;
  height: 35px;
  border: 1px solid #243763;
  border-radius: 10px;
  background-color: #243763;
  color: white;
  text-align: center;
  font-weight: 400;
  padding-top: 4px;
  box-sizing: border-box;

  cursor: pointer;

  /* TODO: 수정하기 */
  :hover {
    background-color: white;
    color: #243763;
  }
`;
