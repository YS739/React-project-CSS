import axios from 'axios';

export const BASE_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount';

// 클론 코딩 관련 전체 리스트 가져오기
export const allVideoList = (nextPageToken) => {
  return axios.get(`/mockData/클론 코딩하기.json`).then((res) => res.data);

  // .get(
  //   `${BASE_URL}&pageToken=${nextPageToken}&maxResults=9&q=클론 코딩&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  // )
  // .then((res) => res.data);
};
// mockData
// .get(`/mockData/allList.json`).then((res) => res.data);

// 카테고리별 클론 코딩 리스트 가져오기
export const categoryVideoList = (category) => {
  return axios.get(`/mockData/${category}.json`).then((res) => res.data.items);
  // .get(
  //   `${BASE_URL}&q=${category}&maxResults=24&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  // )
  // .then((res) => res.data.items);
};
// mockData
// .get(`/mockData/${category}.json`).then((res) => res.data.items);

// 연관 비디오 리스트 가져오기
export const recommendVideoList = (videoId) => {
  return axios
    .get(`/mockData/클론 코딩하기.json`)
    .then((res) => res.data.items);

  // TODO: api로 바꾸기
  // .get(
  //   `${BASE_URL}&relatedToVideoId=${videoId}&type=video&maxResults=9&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  // )
  // .then((res) => res.data.items);
};
