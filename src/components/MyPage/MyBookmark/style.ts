import styled from 'styled-components';

export const BookMarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: 600;
`;

export const ThumNailContainer = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 200px;

  @media screen and (max-width: 1000px) {
    width: 170px;
  }
`;

export const DescriptionContainer = styled.div``;

export const VideoTitle = styled.div`
  display: block;
  margin-bottom: 7px;

  @media screen and (max-width: 1000px) {
    font-size: 13px;
      white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const BookmarkText = styled.div`
  margin-right: 5px;

   @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const ChannelTitle = styled.div`
  font-size: 13px;
  color: #808080;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const BookmarkedDate = styled.div`
  display: flex;
  font-size: 13px;
  color: #808080;
  margin-top: 3px;

  @media screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;


