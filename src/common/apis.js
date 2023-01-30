import axios from 'axios';

export const BASE_URL =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount';

// 클론 코딩 관련 전체 리스트 가져오기
export const allVideoList = (nextPageToken) => {
  return axios
    .get(
      `${BASE_URL}&pageToken=${nextPageToken}&maxResults=6&q=클론 코딩하기&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
    )
    .then((res) => res.data);
};
// mockData
// .get(`/mockData/클론 코딩하기.json`).then((res) => res.data);

// 카테고리별 클론 코딩 리스트 가져오기 - mockData
export const categoryVideoList = (category) => {
  // mockData
  return axios.get(`/mockData/${category}.json`).then((res) => res.data.items);

  // Api
  // .get(
  //   `${BASE_URL}&q=${category}&maxResults=9&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  // )
  // .then((res) => res.data.items);
};

// 연관 비디오 리스트 가져오기 - mockData
export const recommendVideoList = (videoId) => {
  // mockData
  return axios
    .get(`/mockData/클론 코딩하기.json`)
    .then((res) => res.data.items);

  // Api
  // .get(
  //   `${BASE_URL}&relatedToVideoId=${videoId}&type=video&maxResults=6&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  // )
  // .then((res) => res.data.items);
};
