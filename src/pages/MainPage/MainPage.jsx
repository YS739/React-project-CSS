import { useState } from 'react';
import { useQuery } from 'react-query';
import VideoList from '../../components/MainPage/VideoList/VideoList';
import CategorySlide from '../../components/MainPage/CategorySlide/CategorySlide';
import { allVideoList, categoryVideoList } from '../../common/apis';
import {
  SearchSection,
  SearchForm,
  SearchBtn,
  SearchResultBox,
  SearchResult,
  VideoSection,
  VideoBox,
} from './style';
import { HiOutlineSearch } from 'react-icons/hi';

const MainPage = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  // 클론 코딩 관련 전체 리스트 불러오기
  const {
    isLoading,
    data: allList,
    error,
    isError,
  } = useQuery('allVideoList', allVideoList);

  // 카테고리별 리스트 불러오기

  const {
    // isLoading: isLoadingCategory,
    data: categoryList,
    // error: errorCategory,
    // isError: isErrorCategory,
  } = useQuery(['categoryList', category], () => categoryVideoList(category));

  // allList에서 검색어가 포함된 title이 있는 list만 가져오기
  const searchedList = allList?.filter((item) =>
    item.snippet.title.includes(keyword),
  );

  // 검색 실행 함수 - 검색 버튼 눌렀을 때
  const searchHandler = (e) => {
    e.preventDefault();
    // TODO: alert창 라이브러리..?
    if (keyword.trim().length === 0) {
      alert('검색어를 입력해주세요.');
    }
    setKeyword(keyword);
  };

  // 키보드의 enter를 눌렀을 때도 검색 함수 실행
  const OnKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  // 해당 카테고리를 눌렀을 때 api 검색어 부분에 넣을 단어를 받아온다
  const categoryHandler = (category) => {
    setCategory(category);
  };

  return (
    <>
      <SearchSection>
        {/* TODO: 완성되면 컴포넌트 분리하기 */}
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
      {/* 검색 결과를 보여줄 땐 카테고리 슬라이드가 안 보이게 함 */}
      {keyword ? (
        <SearchResultBox>
          <SearchResult>{keyword} 검색 결과</SearchResult>{' '}
        </SearchResultBox>
      ) : (
        <CategorySlide categoryClick={categoryHandler} />
      )}
      {/* 로딩중이거나 에러가 생기면 화면에 표시 */}
      {isLoading && <p>Loading...</p>}
      {isError && (
        <>
          <p>Something is wrong.</p>
          <p>{String(error)}</p>
        </>
      )}
      <VideoSection>
        {keyword ? (
          <VideoBox>
            {searchedList?.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : category ? (
          <VideoBox>
            {categoryList?.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : (
          <VideoBox>
            {allList?.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        )}
      </VideoSection>
    </>
  );
};

export default MainPage;
