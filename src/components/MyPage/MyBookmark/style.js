import styled from 'styled-components';

export const BookMarkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const YouTubeThumNail = styled.img`
  max-width: 230px;
  margin: 5px;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;
