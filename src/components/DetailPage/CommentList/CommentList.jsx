import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { CommentListBody } from './style';
import Comment from '../Comment/Comment';

export default function CommentList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('date', 'desc'));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setUsers(todosArray);
    });
    return () => unsub();
  }, []);
  // const usersCollectionRef = collection(db, 'users');

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  return (
    <CommentListBody>
      {users.map((user) => {
        return <Comment key={user.id} user={user} />;
      })}
    </CommentListBody>
  );
}
