import React , { useState } from 'react';
import AllItemes from './Components/AllItemes';
import './Components/Assests/Styles/App.css';
import { DataContext } from './Components/DataContext';
import SelectedItemes from './Components/SelectedItemes';
import {Col, Row} from 'react-bootstrap'

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


  return (
    <DataContext.Provider value={{checkedInfo , getCheckInfo}}>
      <div className="App">
        <Row>
          <Col >
            <AllItemes />
          </Col>
          <Col>
            <SelectedItemes />
          </Col>
        </Row>
      </div>
    </DataContext.Provider>
  );
}

export default App;
