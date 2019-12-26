import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebaseutils";

import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    
    this.state = {
      isLoading: true
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const colletctionRef = firestore.collection('collection');
    colletctionRef.onSnapshot(async (snapshot) => {
      const collections = convertCollectionSnapshotToMap(snapshot);

      const { updateCollections } = this.props;
      updateCollections(collections);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
        />
        <Route path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
        />
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