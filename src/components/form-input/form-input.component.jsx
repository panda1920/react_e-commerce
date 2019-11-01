import React from 'react';

import './form-input.styles.scss';

function FormInput({handleChange, label, ...otherProps}) {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps}/>
      { createLabelElement(label, otherProps) }
    </div>
  );
}

function createLabelElement(_label, otherProps) {
  if (_label) {
    return (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {_label}
      </label>
    );
  } else {
    return null;
  }
}

export default FormInput;