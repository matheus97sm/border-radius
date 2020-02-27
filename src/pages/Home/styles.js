import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      color: #fff;
      font-size: 48px;
      margin-bottom: 16px;
    }

    p {
      color: #fff;
      font-size: 20px;
      line-height: 30px;
    }

    a {
      margin-top: 32px;
      padding: 4px 40px;
      display: flex;
      align-items: center;
      background-color: #ed213a;
      border-radius: 32px;
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      text-transform: lowercase;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin-left: 8px;
      }
    }
  }
`;

const square1 = keyframes`
  0%, 100% {
    transform: rotate(20deg);
  }

  50% {
    transform: rotate(10deg);
  }
`;

const square2 = keyframes`
  0%, 100% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(20deg);
  }
`;

export const SquareWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  div {
    position: absolute;
    bottom: -25vmin;
    right: -25vmin;
    width: 100%;
    background: linear-gradient(45deg, #93291e, #ed213a);
    width: 100vmin;
    height: 100vmin;
    transform: rotate(20deg);
    animation: ${square1} 8s infinite ease-in-out;
    border-radius: 10vmin;
    box-shadow: -20px -20px 30px rgba(0, 0, 0, 0.15);

    &:nth-of-type(2) {
      bottom: -50vmin;
      right: -50vmin;
      transform: rotate(10deg);
      animation: ${square2} 8s infinite ease-in-out;
    }
  }
`;
