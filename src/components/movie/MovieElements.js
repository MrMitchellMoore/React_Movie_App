import styled from 'styled-components';

export const MovieOver = styled.div`
  background-color: #fff;
  color: #373b69;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  max-height: 100%;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
`;

export const MovieWrapper = styled.div`
  background-color: #373b69;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 300px;
  position: relative;
  overflow: hidden;

  &:hover ${MovieOver} {
    transform: translateX(0);
  }
`;

export const MovieImg = styled.img.attrs (props => (props = {...props}))`
  max-width: 100%;
  height: 450px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  height: 100px;
  overflow: hidden;
`;

export const MovieInfoH3 = styled.h3`
  margin: 10px;
`;
