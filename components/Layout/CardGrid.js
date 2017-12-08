import React from 'react';
import ItemDisplayCard from '../ItemDisplayCard';
import Flex from '../FlexUtils';

export default ({ data }) => (
  <Flex wrap>
    {data &&
      data.map(({
 name, price, image, _id,
}) => (
  <ItemDisplayCard
    thumb={image[0]}
    id={_id}
    name={name}
    price={price}
    key={_id}
  />
      ))}
  </Flex>
);
