import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

function CollectionsOverview({ collections }) {
  return (
    <div className='collections-overview'>
      {
        collections.map(
          ({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>
        )
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    collections: Object.values( selectCollections(state) )
  };
}

export default connect(mapStateToProps)(CollectionsOverview);