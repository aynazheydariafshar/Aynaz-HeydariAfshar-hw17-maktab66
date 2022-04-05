import React from 'react';
// import PropTypes from 'prop-types';

const Itemes = ({valueItem}) => {
    return <input 
    value={valueItem} 
    name='checkboxItemes' 
    type='checkbox' 
    className='my-3'/>;
}

// Itemes.propTypes = propTypes;

export default Itemes;