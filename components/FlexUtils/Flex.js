import React from 'react';

const Flex = ({ children, center, wrap }) => {
  let classes = 'flex';
  if (center) {
    classes += ' flex__center';
  }
  if (wrap) {
    classes += ' flex__wrap';
  }
  return (
    <div className={classes}>
      {children}
      <style jsx>
        {`
          .flex {
            display: flex;
          }
          .flex__center {
            height: 90vh;
            justify-content: center;
            align-items: center;
          }
          .flex__wrap {
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  );
};

export default Flex;
