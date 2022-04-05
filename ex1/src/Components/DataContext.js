import React , {useState} from 'react';

const [data , setData] = useState(undefined);

export const DataContext = React.createContext({data , setData})

export const DataContextProvider = ({children }) => {
    return (
        <DataContext.Provider value={{data , setData}}>
            {...children}
        </DataContext.Provider>
    )
}



