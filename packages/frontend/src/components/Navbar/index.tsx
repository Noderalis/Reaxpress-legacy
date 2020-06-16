import React from 'react';
import './navbar.scss';

export class Navbar extends React.Component {
  render(): JSX.Element {
    return (
      <div className="navbar">
        <header>
          <nav>
            <ul>
              <li>
                <a href="https://blackfall-labs.com">Blackfall Labs</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
