import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const SelectedItemes = () => {
    const checkedItemContext = useContext(DataContext)
    
    return <div className='selected-div'>
        <h2 className='py-3'>SelectedItems</h2>
        {checkedItemContext.checkedInfo.map(item => {
           return <p>{item}</p>;
        })}
    </div>;
}



export default SelectedItemes;