import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;

  > header {
    a {
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;

      svg {
        margin-right: 8px;
      }
    }

    h1 {
      color: #fff;
      text-align: center;
      margin-bottom: 64px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 180px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 64px;
  grid-row-gap: 32px;
  align-items: center;
  justify-items: center;

  input {
    width: 100%;
    padding: 8px;
    background: none;
    border: none;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
`;

export const Square = styled.div`
  width: 240px;
  height: 240px;
  margin: 32px 0;
  background: linear-gradient(45deg, #00b4db, #0083b0);
  border-top-left-radius: ${props =>
    props.borderTopLeft && props.borderTopLeft};
  border-top-right-radius: ${props =>
    props.borderTopRight && props.borderTopRight};
  border-bottom-right-radius: ${props =>
    props.borderBottomRight && props.borderBottomRight};
  border-bottom-left-radius: ${props =>
    props.borderBottomLeft && props.borderBottomLeft};
`;

export const BorderData = styled.code`
  position: relative;
  width: 240px;
  padding: 32px 16px;
  background-color: #0e262e;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  color: #fff;
  cursor: pointer;

  span {
    display: block;
    font-size: 11px;
    line-height: 18px;
  }

  textarea {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }

  svg {
    position: absolute;
    bottom: 8px;
    right: 8px;
  }

  @media screen and (min-width: 1050px) {
    width: unset;

    span {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
