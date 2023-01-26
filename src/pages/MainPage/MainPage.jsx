import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import VideoList from '../../components/MainPage/VideoList/VideoList';
import { allVideoList, categoryVideoList } from '../../common/apis';
import { VideoSection, VideoBox } from './style';
import SearchVideo from '../../components/MainPage/SearchVideo/SearchVideo';

const MainPage = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [nextPageToken, setNextPageToken] = useState('CBkQAA');

  // 클론 코딩 관련 전체 리스트 불러오기
  const {
    isLoading,
    data: allList,
    error,
    isError,
  } = useQuery(['allVideoList', nextPageToken], () =>
    allVideoList(nextPageToken),
  );

  console.log(allList);

  // 카테고리별 리스트 불러오기
  const {
    isLoading: isLoadingCategory,
    data: categoryList,
    error: errorCategory,
    isError: isErrorCategory,
  } = useQuery(['categoryList', category], () => categoryVideoList(category));

  useEffect(() => {
    allVideoList(nextPageToken);
  }, [nextPageToken]);

  // TODO: 수정 필요?
  useEffect(() => {
    categoryVideoList(category);
  }, [category]);

  // 해당 카테고리를 눌렀을 때 api 검색어 부분에 넣을 단어를 받아오기
  const categoryHandler = (category) => {
    setCategory(category);
  };

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

  // 페이지 불러오기 test
  const nextPageBtn = () => {
    setNextPageToken(allList.nextPageToken);
  };

  return (
    <>
      {/* 검색창 및 결과 컴포넌트*/}
      <SearchVideo
        keyword={keyword}
        setKeyword={setKeyword}
        searchHandler={searchHandler}
        OnKeyPressHandler={OnKeyPressHandler}
        categoryHandler={categoryHandler}
      />

      {/* allList - 로딩중이거나 에러가 생기면 화면에 표시 */}
      {isLoading && <p>Loading...</p>}
      {isError && (
        <>
          <p>Something is wrong.</p>
          <p>{String(error)}</p>
        </>
      )}

      {/* Page 버튼 - test*/}
      <button>1</button>
      <br />
      <button onClick={nextPageBtn}>2</button>

      {/* VideoList 컴포넌트*/}
      <VideoSection>
        {/* TODO: 더 간단하게 리팩토링 가능? */}
        {keyword ? (
          <VideoBox>
            {searchedList?.map((video) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : category ? (
          <VideoBox>
            {/* categoryList - 로딩중이거나 에러가 생기면 화면에 표시 */}
            {isLoadingCategory && <p>Loading...</p>}
            {isErrorCategory && (
              <>
                <p>Something is wrong.</p>
                <p>{String(errorCategory)}</p>
              </>
            )}
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
