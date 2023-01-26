import { API_KEY } from './apiKey';
import axios from 'axios';

export const BASE_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount';

// 클론 코딩 관련 전체 리스트 가져오기
export const allVideoList = (pageToken) => {
  return (
    axios
      // .get(`/mockData/allList.json`).then((res) => res.data);

      // pagenation 안 할 때 mockData
      // .get(`/mockData/allList.json`).then((res) => res.data.items);

      // pagenation 할 때 씀
      .get(
        `${BASE_URL}&pageToken=${pageToken}&maxResults=12&q=클론 코딩&key=${API_KEY}`,
      )
      .then((res) => res.data)
  );

  //  pagenation 안 할 때 api
  // .get(`${BASE_URL}&pageToken=${pageToken}&maxResults=24&q=클론 코딩&key=${API_KEY}`)
  // .then((res) => res.data.items)
};

// 카테고리별 클론 코딩 리스트 가져오기
export const categoryVideoList = (category) => {
  return axios.get(`/mockData/${category}.json`).then((res) => res.data.items);
  // 카테고리로 api 불러오기 성공!!
  // .get(`${BASE_URL}&q=${category}&maxResults=24&key=${API_KEY}`)
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
