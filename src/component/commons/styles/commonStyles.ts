import styled from "@emotion/styled";

export const globalContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
`;

export const LaptopContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  overflow: hidden;
`;

export const TabletContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 768px;
  overflow: hidden;
`;

export const TwoEllipsis = styled.div`
  display: -webkit-box;
  overflow: hidden;
  line-height: 1.2;
  height: 2.4em;
  word-break: break-word;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* line-height: 1.2em;
  max-height: 3.6em; */
`;

export const OneEllipsis = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
