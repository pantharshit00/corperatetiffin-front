import React from 'react';
import Appbar from '../Appbar';

export class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <Appbar />
        {this.props.children}
        <style jsx global>
          {`
            body {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}
