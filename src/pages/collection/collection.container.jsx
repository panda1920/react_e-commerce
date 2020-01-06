import { connect } from 'react-redux';

import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsFetching } from '../../redux/shop/shop.selectors';

function mapStateToProps(state) {
  return {
    isLoading: selectIsFetching(state)
  };
}

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;