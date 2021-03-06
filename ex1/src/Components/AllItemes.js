import React , {useState,useEffect,useContext} from 'react';
import { DataContext } from './DataContext';
import Itemes from './Itemes';

const AllItemes = () => {

    const [item, setitem] = useState([])
    const itemCheckContext = useContext(DataContext)

    //get data from json file
    const getData = () => {
        fetch('/json/checkboxes.json')
            .then((res) => res.json())
            .then((res) => {setitem(res)})
    };
    
    useEffect(() => {
        getData()
    }, []);
    

    return <div className='allitemes-div'>
        <h2 className='py-3'>AllItemes</h2>
        {item.map(element => <div>
            <Itemes 
                valueItem = {element.name}
                handleOnchange = {(e) => itemCheckContext.getCheckInfo(e)}
                title = {element.name}
                />
        </div>)}
    </div>;
}



export default AllItemes;