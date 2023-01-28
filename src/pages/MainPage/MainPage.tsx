import React, {
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import { useQuery } from 'react-query';
import VideoList from '../../components/MainPage/VideoList/VideoList';
import { allVideoList, categoryVideoList } from '../../common/apis';
import { VideoSection, VideoBox } from './style';
import SearchVideo from '../../components/MainPage/SearchVideo/SearchVideo';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../components/GlobalComponents/AlertUI/AlertUI';

const MainPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  // 스크롤 시 추가로 불러오는 VideoList
  const [videos, setVideos] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState<string>('');
  const observerRef = useRef<HTMLDivElement>(null);
  // 클론 코딩 전체 리스트 불러오기
  const {
    isLoading: isLoadingAll,
    data: allList,
    error,
    isError,
  } = useQuery(['allVideoList', nextPageToken], () =>
    allVideoList(nextPageToken),
  );

  const allListData = allList?.items;

  // 카테고리별 리스트 불러오기
  const {
    isLoading: isLoadingCategory,
    data: categoryList,
    error: errorCategory,
    isError: isErrorCategory,
  } = useQuery(['categoryList', category], () => categoryVideoList(category));

  // nextPageToken과 category가 있을 때만 api 호출하기
  useEffect(() => {}, [nextPageToken]);
  useEffect(() => {}, [category]);

  // 해당 카테고리를 눌렀을 때 api 검색어 부분에 넣을 단어를 받아오기
  const categoryHandler = (category: string) => {
    setCategory(category);
  };

  // 검색 실행 함수 - 검색 버튼 눌렀을 때
  const searchHandler = (e?: MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    if (keyword.trim().length === 0) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'검색어를 입력해주세요.'} onClose={onClose} />;
        },
      });
    }
    setKeyword(keyword);
  };

  // 키보드의 enter를 눌렀을 때도 검색 함수 실행
  const OnKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    if (e.key === 'Enter') {
      searchHandler();
    }
  };

  // allList에서 검색어가 포함된 title이 있는 list만 가져오기
  const searchedList = allListData?.filter((item: any) =>
    item.snippet.title.includes(keyword),
  );

  // Intersection Observer API - 무한 스크롤
  const handleLoadMore = async () => {
    try {
      setVideos([...videos, ...allList?.items]);
      setNextPageToken(allList.nextPageToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          handleLoadMore();
        }
      });
    }, options);
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [handleLoadMore]);

  return (
    <>
      {/* 검색창 및 결과(+카테고리 슬라이드)컴포넌트*/}
      <SearchVideo
        keyword={keyword}
        setKeyword={setKeyword}
        searchHandler={searchHandler}
        OnKeyPressHandler={OnKeyPressHandler}
        categoryHandler={categoryHandler}
      />

      {/* allList - 로딩중이거나 에러가 생기면 화면에 표시 */}
      {isLoadingAll && <p>Loading...</p>}
      {isError && (
        <>
          <p>Something is wrong.</p>
          <p>{String(error)}</p>
        </>
      )}

      <VideoSection>
        {/* TODO: 더 간단하게 리팩토링 가능? */}
        {keyword ? (
          <VideoBox>
            {searchedList?.map((video: any) => (
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
            {categoryList?.map((video: any) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : (
          <>
            <VideoBox>
              {/* infinite scroll - nextPage Video 불러오는 부분 */}
              {videos.map((video: any) => (
                <VideoList key={video.id['videoId']} video={video} />
              ))}
            </VideoBox>
          </>
        )}
        {/* observer api가 관찰하는 부분 - 이 위치에 스크롤이 도달하면 다음데이터를 불러온다 */}
        <div ref={observerRef}></div>
      </VideoSection>
    </>
  );
};

export default MainPage;
