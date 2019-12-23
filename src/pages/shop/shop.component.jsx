import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebaseutils";

import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const colletctionRef = firestore.collection('collection');
    colletctionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionSnapshotToMap(snapshot);

      const { updateCollections } = this.props;
      updateCollections(collections);
    });
  }

  render() {
    const { match } = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCollections: (collectionMap) => dispatch( updateCollections(collectionMap) )
  };
}

export default connect(null, mapDispatchToProps)(ShopPage);