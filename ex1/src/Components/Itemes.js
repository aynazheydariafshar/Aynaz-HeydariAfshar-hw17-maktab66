import React from 'react';
// import PropTypes from 'prop-types';

const Itemes = ({valueItem , keyid , handleOnchange , checkedItemes}) => {
    return <input 
    value={valueItem} 
    name='checkboxItemes' 
    type='checkbox' 
    className='my-3'
    id={keyid}
    onChange={handleOnchange}
    checked={checkedItemes}/>;
}

// Itemes.propTypes = {

// };

export default Itemes;