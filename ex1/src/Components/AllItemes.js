import React , {useState,useEffect,useContext, useRef} from 'react';
import { DataContext } from './DataContext';
import Itemes from './Itemes';

const AllItemes = () => {

    const [item, setitem] = useState([])
    const itemCheckContext = useContext(DataContext)

    const getData = () => {
        fetch('/json/checkboxes.json')
            .then((res) => res.json())
            .then((res) => {setitem(res)})
    };
    
    useEffect(() => {
        getData()
    }, []);
    

    return <>
        <h2 className='my-3'>AllItemes</h2>
        {item.map((element , index) => <div>
            <Itemes 
                keyid = {element.id} 
                valueItem = {element.name}
                handleOnchange = {(e) => itemCheckContext.getCheckInfo(e)}
                /> {element.name}
        </div>)}
    </>;
}



export default AllItemes;