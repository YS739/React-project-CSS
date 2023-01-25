import { useState } from 'react';
import { useQuery } from 'react-query';
import VideoList from '../../components/MainPage/VideoList/VideoList';
import CategorySlide from '../../components/MainPage/CategorySlide/CategorySlide';
import { getVideoList } from '../../common/apis';
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

  const {
    isLoading,
    data: videoList,
    error,
  } = useQuery(['getVideoList', keyword], () => getVideoList(keyword));

  // allList에서 검색어에 해당 하는 title이 있는 list만 가져오기
  // FIXME: 키워드를 api에 넘겨줄 땐 기존 리스트가 아닌 키워드로 검색한 결과를 가져올 텐데
  // 이 때는 allList를 받아오는 api를 따로 만들어 allList data=videoList로 해야 하나?
  const searched = videoList?.filter((item) =>
    item.snippet.title.includes(keyword),
  );

  // 검색 실행 함수 - 검색 버튼 눌렀을 때
  const searchHandler = (e) => {
    e.preventDefault();
    // TODO: alert창 라이브러리..?
    if (keyword.trim().length === 0) {
      alert('검색어를 입력해주세요.');
    }
    // navigate(`/${keyword}`);
    setKeyword(keyword);
  };

  // 검색 실행 함수 - 키보드의 enter를 눌렀을 때
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchHandler();
    }
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
            onKeyPress={handleOnKeyPress}
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
        <CategorySlide />
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      <VideoSection>
        {keyword ? (
          <VideoBox>
            {searched?.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : (
          <VideoBox>
            {videoList?.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        )}
      </VideoSection>
    </>
  );
};

export default MainPage;
