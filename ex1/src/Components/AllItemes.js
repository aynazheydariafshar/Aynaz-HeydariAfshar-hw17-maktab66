import React , {useState,useEffect} from 'react';

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
            <input className='my-3' value={element.name} type='checkbox' /> {element.name}
        </div>)}
    </>;
}



export default AllItemes;