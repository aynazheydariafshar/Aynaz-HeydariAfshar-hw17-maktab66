import React from 'react';
import PropTypes from 'prop-types';

const Itemes = ({valueItem , handleOnchange , title }) => {
    return <>
    <input 
        value={valueItem} 
        name='checkboxItemes' 
        type='checkbox' 
        className='my-3'
        onChange={handleOnchange} 
    />
    <label className='p-1'>{title}</label>
    </>
}

Itemes.propTypes = {
    title : PropTypes.string,
    value : PropTypes.string,
    handleOnchange : PropTypes.func
};

export default Itemes;