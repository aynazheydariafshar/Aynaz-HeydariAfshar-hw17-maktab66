import React from 'react';
import PropTypes from 'prop-types';

const Itemes = ({valueItem , keyid , handleOnchange , title }) => {
    return <>
    <input 
        value={valueItem} 
        name='checkboxItemes' 
        type='checkbox' 
        className='my-3'
        id={keyid}
        onChange={handleOnchange} />
    <label className='p-1'>{title}</label>
    </>
}

Itemes.propTypes = {
    title : PropTypes.string
};

export default Itemes;