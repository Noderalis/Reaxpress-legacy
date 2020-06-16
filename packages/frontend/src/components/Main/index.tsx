import React from 'react';
import './main.scss';

interface IProps {
  children: React.ReactNode;
}

export class Main extends React.Component<IProps> {
  render(): JSX.Element {
    return <div className="main-content">{this.props.children}</div>;
  }
}
