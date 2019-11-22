import React from 'react';

import './custom-button.styles.scss';

function CustomButton({children, isGoogleSignIn, isInverted, ...otherProps}) {
  return (
    <button className={ createStyleBasedOnProps(isGoogleSignIn, isInverted) } {...otherProps}>
      {children}
    </button>
  );
}

function createStyleBasedOnProps(isGoogleSignIn, isInverted) {
  let style = 'custom-button';
  if (isGoogleSignIn) style += ' google-sign-in';
  if (isInverted) style += ' inverted';

  return style;
}

export default CustomButton;