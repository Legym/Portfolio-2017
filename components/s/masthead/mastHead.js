import React from 'react';
import { Container } from 'semantic-ui-react';
import Link from 'next/link';

export default function Masthead() {
  return (
    <Container className="navigation">
      <img src="/static/_global/images/logo-frontier-red.svg" alt="" />

      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/test">
            <a>test</a>
          </Link>
        </li>

      </ul>
    </Container>
  );
}
