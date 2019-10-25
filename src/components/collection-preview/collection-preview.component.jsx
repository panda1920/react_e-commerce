import React from 'react';

import CollectionItem from '../collection-item/collection-item-components';

import './collection-preview.styles.scss';

function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {renderNItems(4, items)}
      </div>
    </div>
  );
}

function renderNItems(n, items) {
  return (
    items.filter((item, idx) => idx < n)
          .map(
            ({id, ...otherProps}) => <CollectionItem key={id} {...otherProps} />
          )
  );
}

export default CollectionPreview;