import { createContext,useState,useContext } from "react";

const UserContext= createContext();


export function UserProvider({children}){
    const [count,setCount] = useState(0);
    return(
        <UserContext.Provider value={{count,setCount}}>
            {children}
        </UserContext.Provider>
    )
}

export const useCount=()=>useContext(UserContext);