import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdContentCopy } from 'react-icons/md';

import { Container, Wrapper, InputWrapper, Square, BorderData } from './styles';

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
  }

  handleBorder = (who, e) => {
    const where = who;
    const newValue = e.target.value;

    this.setState({
      [where]: newValue,
    });
  };

  render() {
    const { top, right, bottom, left } = this.state;

    return (
      <Container>
        <header>
          <Link to="/">
            <MdArrowBack size="24" color="#fff" />
            Voltar
          </Link>
          <h1>Border-radius generator</h1>
        </header>

        <Wrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="0px"
              onChange={e => this.handleBorder('top', e)}
            />
            <input
              type="text"
              placeholder="0px"
              onChange={e => this.handleBorder('right', e)}
            />
            <input
              type="text"
              placeholder="0px"
              onChange={e => this.handleBorder('bottom', e)}
            />
            <input
              type="text"
              placeholder="0px"
              onChange={e => this.handleBorder('left', e)}
            />
          </InputWrapper>

          <Square
            borderTopLeft={top}
            borderTopRight={right}
            borderBottomRight={bottom}
            borderBottomLeft={left}
          />

          <BorderData>
            <span>border-radius: 1px;</span>
            <MdContentCopy size="16" color="#fff" />
          </BorderData>
        </Wrapper>
      </Container>
    );
  }
}
