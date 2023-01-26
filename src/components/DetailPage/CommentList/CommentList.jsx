import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { CommentListBody } from './style';
import Comment from '../Comment/Comment';

export default function CommentList({ video }) {
  // 데이터 실시간 변경 확인

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'test'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(newComments);
    });
    return unsubscribe;
  }, []);

  return (
    <CommentListBody>
      {comments
        .filter((user) => user.videoId === video.id.videoId)
        .map((user) => {
          return <Comment key={user.id} user={user} />;
        })}
    </CommentListBody>
  );
}
