import { API_KEY } from './apiKey.js';
import axios from 'axios';

const BASE_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet';

// TODO: api로 변경시 주석 부분 활용하기
export const getVideoList = (keyword) => {
  return axios
    .get(`/mockData/${keyword ? 'react' : 'allList'}.json`)
    .then((res) => res.data.items);
  // .get(
  //   `${BASE_URL}&maxResults=25&q=${
  //     keyword ? keyword : '클론 코딩하기'
  //   }}&key=${API_KEY}`,
  // )
  // .then((res) => res.data.items)
};

// // TODO: videoId 설정해야 함
// export const getRelatedList = () => {
//   return fetch(
//     `${BASE_URL}&relatedToVideoId=${videoId}bJLfBq9npwQ&type=video&maxResults=25&key=${API_KEY}`,
//   );
// };
