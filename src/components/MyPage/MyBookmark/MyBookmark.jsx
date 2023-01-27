import {
  BookMarkContainer,
  ThumNailContainer,
  Img,
  DescriptionContainer,
  VideoTitle,
  BookmarkedDate,
  ChannelTitle,
  BookmarkText,
} from './style';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { format, register } from 'timeago.js';
import KoLocale from 'timeago.js/lib/lang/ko';

const MyBookmark = () => {
  // 비디오 생성날짜 한국어로 표기하기
  register('ko', KoLocale);
  // const {
  //   state: { video },
  // } = useLocation();
  // console.log(video)
  // 북마크 리스트
  const [bookmarks, setBookmarks] = useState([]);
  // 현재 유저
  const [currentUser, setCurrentUser] = useState('');
  // const currentUser = authService.currentUser;

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setCurrentUser(authService.currentUser.uid);
        getBookmarks();
        console.log('로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
  }, [bookmarks]);

  // const {
  //   state: { video },
  // } = useLocation();
  // const { title, channelTitle, description, thumbnails } = video.snippet;
  // console.log('비디오', video);

  const getBookmarks = async () => {
    const q = query(
      collection(db, 'bookmark'),
      where('userId', '==', currentUser),
    );
    await getDocs(q).then((querySnapshot) => {
      const bookMarklist = [];
      querySnapshot.forEach((doc) => {
        bookMarklist.push({
          userId: doc.data().userId,
          videoId: doc.data().videoId,
          thumbnail: doc.data().thumbnail,
          videoTitle: doc.data().videoTitle,
          date: doc.data().date,
          channelTitle: doc.data().channelTitle,
          video: doc.data().video,
        });
      });
      setBookmarks(bookMarklist);
    });
  };
  // console.log(bookmarks);
  const navigate = useNavigate();
  // onClick={(() => navigate(`/detail/${x.videoId}`), { state: { x.video } })}
  return (
    <>
      {bookmarks.map((bookmark) => {
        return (
          <BookMarkContainer key={bookmark.id}>
            <ThumNailContainer>
              <Img src={bookmark.thumbnail} />
            </ThumNailContainer>
            <DescriptionContainer>
              <VideoTitle> {bookmark.videoTitle}</VideoTitle>
              <ChannelTitle>{bookmark.channelTitle}</ChannelTitle>
              <BookmarkedDate>
                <BookmarkText>북마크한 시간:</BookmarkText>
                {format(bookmark.date, 'ko')}
              </BookmarkedDate>
            </DescriptionContainer>
          </BookMarkContainer>
        );
      })}
    </>
  );
};

export default MyBookmark;
