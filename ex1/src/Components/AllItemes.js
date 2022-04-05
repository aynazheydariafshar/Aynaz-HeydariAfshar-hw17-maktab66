import React , {useState,useEffect} from 'react';
import Itemes from './Itemes';

const AllItemes = () => {

    const [item, setitem] = useState([])

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
        {item.map(element => <div>
            <Itemes valueItem={element.name} /> {element.name}
        </div>)}
    </>;
}



export default AllItemes;