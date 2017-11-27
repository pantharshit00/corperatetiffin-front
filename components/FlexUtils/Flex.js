import React from 'react';

const Flex = ({ children, center }) => {
  let classes = 'flex';
  if (center) {
    classes += ' flex__center';
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
        `}
      </style>
    </div>
  );
};

export default Flex;
