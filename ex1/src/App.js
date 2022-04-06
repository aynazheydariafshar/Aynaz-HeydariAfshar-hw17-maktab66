import React , { useState } from 'react';
import AllItemes from './Components/AllItemes';
import './Components/Assests/Styles/App.css';
import { DataContext } from './Components/DataContext';

function App() {

  const [checkedInfo , setCheckedInfo] = useState([])
  const getCheckInfo = (e,index) => {
    if(e.target.checked){
      // checkedInfo.push({[e.target.id] : e.target.value})
      setCheckedInfo(checkedInfo.concat([...checkedInfo,e.target.value]))
    }else{
      // checkedInfo.filter((item,numindex) => numindex !== index)
      // for(let i=0 ; i< listofchecked.current.length ; i++){
        //     listofchecked.current.splice(i , 1)
        // }
          checkedInfo.splice(index,1)
          setCheckedInfo([...checkedInfo])
        // setCheckedInfo(checkedInfo.filter((item,numindex) => {return numindex !== index}))
      }
      // itemCheckContext.getCheckInfo(checkedInfo.current)
      // setCheckedInfo(e,index)
      console.log(checkedInfo)
  }

  
  return (
    <DataContext.Provider value={{checkedInfo , getCheckInfo}}>
      <div className="App">
        <AllItemes />
      </div>
    </DataContext.Provider>
  );
}

export default App;
