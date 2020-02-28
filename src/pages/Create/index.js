import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdContentCopy } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Container, Wrapper, InputWrapper, Square, BorderData } from './styles';

const toastList = new Set();
const MAX_TOAST = 3;

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

  notAllowedKey = () => {
    if (toastList.size < MAX_TOAST) {
      const id = toast.error(
        'Permitido somente letras, números e operadores!',
        {
          onClose: () => toastList.delete(id),
        }
      );
      toastList.add(id);
    }
  };

  copiedToClipboard = () => {
    if (toastList.size < MAX_TOAST) {
      const id = toast.success('Copiado para a área de transferência!', {
        onClose: () => toastList.delete(id),
      });
      toastList.add(id);
    }
  };

  handleBorder = (who, e) => {
    const where = who;
    const newValue = e.target.value;

    if (newValue.indexOf('"') !== -1 || newValue.indexOf("'") !== -1) {
      return this.notAllowedKey();
    }

    this.setState({
      [where]: newValue,
    });
  };

  copyToClipboard = () => {
    this.textarea.select();
    document.execCommand('copy');

    return this.copiedToClipboard();
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

          <BorderData onClick={() => this.copyToClipboard()}>
            <span>
              border-radius: {top} {right} {bottom} {left};
            </span>
            <span>
              -webkit-border-radius: {top} {right} {bottom} {left};
            </span>
            <span>
              -moz-border-radius: {top} {right} {bottom} {left};
            </span>
            <textarea
              ref={textarea => (this.textarea = textarea)}
              readOnly
              value={`
                border-radius: ${top} ${right} ${bottom} ${left};
                -webkit-border-radius: ${top} ${right} ${bottom} ${left};
                -moz-border-radius: ${top} ${right} ${bottom} ${left};
              `}
            />
            <MdContentCopy size="16" color="#fff" />
          </BorderData>
        </Wrapper>
      </Container>
    );
  }
}
