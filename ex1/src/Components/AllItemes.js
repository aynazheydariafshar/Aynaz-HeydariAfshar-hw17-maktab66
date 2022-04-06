import React , {useState,useEffect,useContext, useRef} from 'react';
import { DataContext } from './DataContext';
import Itemes from './Itemes';

const AllItemes = () => {

    const [item, setitem] = useState([])
    const [listofchecked , setlistofchecked] = useState([])
    const itemCheckContext = useContext(DataContext)

    const getData = () => {
        fetch('/json/checkboxes.json')
            .then((res) => res.json())
            .then((res) => {setitem(res)})
    };
    
    useEffect(() => {
        getData()
    }, []);

    // const handleCheckbox = (e , index) => {
    //     if(e.target.checked){
    //         listofchecked.current.push({[e.target.id] : e.target.value})
    //     }else{
    //         listofchecked.current.filter((item,numindex) => numindex !== index)
    //         // for(let i=0 ; i< listofchecked.current.length ; i++){
    //         //     listofchecked.current.splice(i , 1)
    //         // }
    //     }
    //     itemCheckContext.getCheckInfo(listofchecked.current)
         
    // }
    

    return <>
        <h2 className='my-3'>AllItemes</h2>
        {item.map((element , index) => <div>
            <Itemes 
                keyid = {element.id} 
                valueItem = {element.name}
                handleOnchange = {(e) => itemCheckContext.getCheckInfo(e,index)}
                /> {element.name}
        </div>)}
    </>;
}



export default AllItemes;