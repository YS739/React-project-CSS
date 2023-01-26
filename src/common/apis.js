import { API_KEY } from './apiKey.js';
import axios from 'axios';

const BASE_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet';

// 클론 코딩 관련 전체 리스트 가져오기
export const allVideoList = () => {
  return axios.get(`/mockData/allList.json`).then((res) => res.data.items);
  // TODO: api로 변경시엔 이 부분 활용하기
  // .get(`${BASE_URL}&maxResults=25&q=클론 코딩하기&key=${API_KEY}`)
  // .then((res) => res.data.items)
};

// 카테고리별 클론 코딩 리스트 가져오기
export const categoryVideoList = (category) => {
  return axios.get(`/mockData/${category}.json`).then((res) => res.data.items);
  // 카테고리로 api 불러오기 성공!!
  // .get(`${BASE_URL}&maxResults=25&q=${category}&key=${API_KEY}`)
  // .then((res) => res.data.items)
};

// 연관 비디오 리스트 가져오기
// // TODO: videoId 설정해야 함
export const RecommendVideoList = (videoId) => {
  return axios
    .get(
      `${BASE_URL}&relatedToVideoId=${videoId}&type=video&maxResults=9&key=${API_KEY}`,
    )
    .then((res) => res.data.items);
};
