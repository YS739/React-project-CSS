import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ViewBody,
  VideoView,
  TextBody,
  VideoText,
  VideoNickName,
  VideoTime,
  RecommendBody,
} from './style';

export default function Recommend({ video }) {
  const navigate = useNavigate();

  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <RecommendBody
      onClick={() =>
        navigate(`/detail/${video.id.videoId}`, { state: { video } })
      }
    >
      <ViewBody>
        <VideoView src={thumbnails.medium.url} alt="videoThumbnail" />
        <TextBody>
          <VideoText>{title}</VideoText>
          <VideoNickName>{channelTitle} </VideoNickName>
          <VideoTime>2month ago</VideoTime>
        </TextBody>
      </ViewBody>
    </RecommendBody>
  );
}
