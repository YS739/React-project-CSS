import { collection, query, where, getDocs } from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import { useState, useEffect } from 'react';
import {onAuthStateChanged, User } from 'firebase/auth';
import { format, register } from 'timeago.js';
import KoLocale from 'timeago.js/lib/lang/ko';
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

const MyBookmark = () => {
  // 비디오 생성날짜 한국어로 표기하기
  register('ko', KoLocale);

  // 북마크 리스트
  const [bookmarks, setBookmarks] = useState<BookmarkH[]>([]);
  // 현재 유저
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setCurrentUser(authService.currentUser);
        getBookmarks();
        console.log('로그인 되어있음');
      } else if (!user) {
        console.log('로그인 안됨');
      }
    });
  }, [currentUser]);

  const getBookmarks = async () => {
    const q = query(
      collection(db, 'bookmark'),
      where('userId', '==', currentUser?.uid),
    );
    await getDocs(q).then((querySnapshot) => {
      const bookMarklist:BookmarkH[] = [];
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
