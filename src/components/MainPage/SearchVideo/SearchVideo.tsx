import {
  SearchSection,
  SearchForm,
  SearchBtn,
  SearchResultBox,
  SearchResult,
} from './style';
import { HiOutlineSearch } from 'react-icons/hi';
import CategorySlide from '../CategorySlide/CategorySlide';
import React from 'react';

// call signature
type SearchVideoJ = (props: any) => any;

const SearchVideo: SearchVideoJ = ({
  keyword,
  setKeyword,
  OnKeyPressHandler,
  searchHandler,
  categoryHandler,
}) => {
  return (
    <>
      <SearchSection>
        <SearchForm onSubmit={searchHandler}>
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={OnKeyPressHandler}
          />
          <SearchBtn type="submit">
            <HiOutlineSearch style={{ fontSize: 20 }} />
          </SearchBtn>
        </SearchForm>
      </SearchSection>
      {/* 검색할 때 카테고리 슬라이드(컴포넌트) 대신 검색결과 text 보여주기 */}
      {keyword ? (
        <SearchResultBox>
          <SearchResult>{keyword} 검색 결과</SearchResult>
        </SearchResultBox>
      ) : (
        <CategorySlide categoryClick={categoryHandler} />
      )}
    </>
  );
};

export default SearchVideo;
