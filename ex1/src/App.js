import React , { useState , useEffect} from 'react';
import AllItemes from './Components/AllItemes';
import './Components/Assests/Styles/App.css';
import { DataContext } from './Components/DataContext';

function App() {

  const [checkedInfo , setCheckedInfo] = useState([]);
  
  const getCheckInfo = (e) => {
    let updatedList = [...checkedInfo]
    if(e.target.checked){
      updatedList = [...checkedInfo , e.target.value]
    }else{
      updatedList.splice(checkedInfo.indexOf(e.target.value), 1)
    }
      setCheckedInfo(updatedList)
    }
    
    useEffect(() => {
      console.log(checkedInfo)
  }, [checkedInfo]) 


  return (
    <DataContext.Provider value={{checkedInfo , getCheckInfo}}>
      <div className="App">
        <AllItemes />
      </div>
    </DataContext.Provider>
  );
}

export default App;
