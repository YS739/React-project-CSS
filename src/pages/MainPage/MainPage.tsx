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
import { VideoSection, VideoBox, TopBtnSection, TopBtn } from './style';
import SearchVideo from '../../components/MainPage/SearchVideo/SearchVideo';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../components/GlobalComponents/AlertUI/AlertUI';
import MainVideoListLoadingUI from '../../components/SkeletonUI/MainVideoListLoadingUI';
import MainErrorUI from '../../components/SkeletonUI/MainErrorUI';

const MainPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  // 스크롤 할 때 추가로 불러오는 VideoList(무한 스크롤)
  const [videos, setVideos] = useState<any>([]);
  const [nextPageToken, setNextPageToken] = useState<string>('');
  const observerRef = useRef<HTMLDivElement>(null);

  // Top button
  const [showButton, setShowButton] = useState(false);

  // 클론 코딩 전체 리스트 불러오기(+PageNation)
  const {
    isLoading: isLoadingAll,
    data: allList,
    isError,
  } = useQuery(['allVideoList', nextPageToken], () =>
    allVideoList(nextPageToken),
  );

  // 카테고리별 리스트 불러오기
  const {
    isLoading: isLoadingCategory,
    data: categoryList,
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

  // 전체 video list에서 검색어가 포함된 title을 가진 video list
  const searchedList = videos.filter((item: any) =>
    item.snippet.title.includes(keyword),
  );

  // Intersection Observer API - 무한 스크롤 실행 함수
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
      threshold: 0.7,
    };
    // 스크롤이 특정 위치에 도달했을 때 handleLoadMore 함수가 실행되며 다음 data를 불러옴
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

  // Top button
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  return (
    <>
      {/* Top 버튼 */}
      {showButton && (
        <TopBtnSection>
          <TopBtn onClick={scrollToTop} type="button">
            Top
          </TopBtn>
        </TopBtnSection>
      )}
      {/* 검색창 및 결과(+카테고리 슬라이드)컴포넌트*/}
      <SearchVideo
        keyword={keyword}
        setKeyword={setKeyword}
        searchHandler={searchHandler}
        OnKeyPressHandler={OnKeyPressHandler}
        categoryHandler={categoryHandler}
      />

      {/* Video List */}
      <VideoSection>
        {keyword ? (
          <VideoBox>
            {searchedList?.map((video: any) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : category ? (
          <VideoBox>
            {/* categoryList - 로딩중이거나 에러가 생기면 화면에 표시 */}
            {isLoadingCategory && <MainVideoListLoadingUI />}
            {isErrorCategory && <MainErrorUI />}
            {categoryList?.map((video: any) => (
              <VideoList key={video.id['videoId']} video={video} />
            ))}
          </VideoBox>
        ) : (
          <>
            <VideoBox>
              {/* allList - 로딩중이거나 에러가 생기면 화면에 표시 */}
              {isLoadingAll && <MainVideoListLoadingUI />}
              {isError && <MainErrorUI />}

              {/* 무한 스크롤 되는 video list */}
              {videos.map((video: any) => (
                <VideoList key={video.id['videoId']} video={video} />
              ))}
            </VideoBox>
          </>
        )}
        {/* observer api가 관찰하는 부분 - 이 위치에 스크롤이 도달하면 다음 데이터를 불러온다 */}
        <div ref={observerRef}></div>
      </VideoSection>
    </>
  );
};

export default MainPage;
