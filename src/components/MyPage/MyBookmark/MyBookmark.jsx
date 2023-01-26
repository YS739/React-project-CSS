import { BookMarkContainer, YouTubeThumNail } from './style.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { authService, db } from '../../../common/firebase.js';
import { useState } from 'react';

const MyBookmark = () => {
  // 북마크 리스트
  const [bookmarks, setBookmarks] = useState([]);
  // 현재 유저
  const currentUser = authService.currentUser;

  const q = query(
    collection(db, 'bookmark'),
    where('userId', '==', currentUser.uid),
  );

  getDocs(q).then((querySnapshot) => {
    const bookMarklist = [];
    querySnapshot.forEach((doc) => {
      bookMarklist.push({
        userId: doc.data().userId,
        videoId: doc.data().videoId,
      });
    });

    setBookmarks(bookMarklist);
  });
  return (
    <BookMarkContainer>
      {bookmarks.map((x) => {
        return (
          <YouTubeThumNail src={require('./image 1.png')} alt="youtube img" />
        );
      })}
    </BookMarkContainer>
  );
};

export default MyBookmark;
