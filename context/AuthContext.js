import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { createContext } from "react"

export const AuthContext = createContext(null);

export const AuthProvider = ({children})=>{
    const [userDetails, setUserDetails] = useState(null);
    const [authToken, setAuthToken] = useState("");
   AsyncStorage.getItem('userDetails').then(details=>setUserDetails(details));
   AsyncStorage.getItem('authToken').then(token=>setAuthToken(token));
  

   return (
    <AuthContext.Provider value={{userDetails, authToken}}>
        {children}
    </AuthContext.Provider>
   )



}