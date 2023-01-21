import { API_KEY } from './apiKEY';
const BASE_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet';

// TODO: 검색어 = Category value 값 받아와야하나?
// export const getVideoList = () => {
//   return fetch(`${BASE_URL}&maxResults=25&q=${검색어}&key=${API_KEY}`);
// };

// // TODO: movieId 설정해야 함
// export const getRelatedList = () => {
//   return fetch(
//     `${BASE_URL}&relatedToVideoId=${movieId}bJLfBq9npwQ&type=video&maxResults=25&key=${API_KEY}`,
//   );
// };
