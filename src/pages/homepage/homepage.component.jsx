import React from 'react'

import Directory from'../../components/directory/directory.component'

import './homepage.styles.scss'

export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <Directory />
      </div>
    </div>
  );
}