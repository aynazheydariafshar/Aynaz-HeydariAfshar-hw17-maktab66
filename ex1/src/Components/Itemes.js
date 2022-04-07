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
        onChange={handleOnchange} 
    />
    <label className='p-1'>{title}</label>
    </>
}

Itemes.propTypes = {
    title : PropTypes.string,
    keyid : PropTypes.number,
    value : PropTypes.string,
    handleOnchange : PropTypes.func
};

export default Itemes;