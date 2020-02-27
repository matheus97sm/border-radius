import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

import { Container, SquareWrapper } from './styles';

export default function Home() {
  return (
    <Container>
      <div>
        <h1>Border-radius generator</h1>
        <p>Here you can generate and preview your custom border-radius</p>
        <Link to="/create">
          Start <MdArrowForward size="24" color="#fff" />
        </Link>
      </div>

      <SquareWrapper>
        <div />
        <div />
      </SquareWrapper>
    </Container>
  );
}
