import React from 'react';
import Downshift from 'downshift';
import { Input } from './index';

export default function BasicAutocomplete({
  items,
  changeRoute,
  onChange,
  fetchMore,
}) {
  return (
    <Downshift
      onSelect={onChange}
      onInputValueChange={fetchMore}
      itemToString={i => (!i ? '' : i)}
      render={({
        getInputProps,
        getItemProps,
        isOpen,
        selectedItem,
        highlightedIndex,
      }) => (
        <div style={{ minWidth: '60%' }}>
          <Input
            autoFocus
            style={{ marginBottom: 0 }}
            {...getInputProps({
              placeholder: 'Search for your favourite food',
            })}
          />
          {isOpen ? (
            <div
              style={{
                position: 'absolute',
                background: '#fff',
                borderRadius: '0.2rem',
                zIndex: 50,
                minWidth: '59%',
              }}
            >
              {items.map((item, index) => (
                <div
                  {...getItemProps({ item: item.name })}
                  key={item._id}
                  onClick={() => changeRoute(item._id)}
                  onKeyDown={() => changeRoute(item._id)}
                  role="presentation"
                  style={{
                    backgroundColor:
                      highlightedIndex === index ? '#ddd' : 'white',
                    fontWeight: selectedItem === item.name ? 'bold' : 'normal',
                    padding: '0.5rem',
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}
    />
  );
}
