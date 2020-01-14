import React from 'react'
import { connect } from "react-redux";

import MenuItem from '../menu-item/menu-item.component'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss'

function Directory({ sections }) {
  return (
    <div className='directory-menu'>
      {
        sections.map(section => {
          const {id, ...sectionProps} = section;
          return <MenuItem key={id} {...sectionProps} />
        })
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sections: selectDirectorySections(state)
  };
}

export default connect(mapStateToProps)(Directory);