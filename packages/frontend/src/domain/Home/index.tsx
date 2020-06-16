import React from 'react';
import { Footer } from '../../components/Footer';
import { Main } from '../../components/Main';
import { Navbar } from '../../components/Navbar';
import './home.scss';

export class Home extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <Navbar />
        <Main>
          <div className="title-area">
            <h1>Welcome to Y2TWRS!</h1>
          </div>
          <div className="demo-area">
            <p>To get started, edit literally anything!</p>
          </div>
        </Main>
        <Footer />
      </>
    );
  }
}
