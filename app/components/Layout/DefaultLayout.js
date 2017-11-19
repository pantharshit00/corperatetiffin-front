import React from 'react';

export class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
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
