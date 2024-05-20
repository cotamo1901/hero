import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { AuthReducer } from "./AuthReducer"

const initialState={
    logged:false,
}


export const AuthProvider = ({children}) => {

    const [state,dispatch ]=useReducer(AuthReducer,initialState)

    const login=(name='')=>{

      const action={
        type:types.login,
        payload:{
          id:'ABC',
          name: name
        }
      }
      dispatch(action)

    }
  return (
   <AuthContext.Provider value={{...state,login:login}}>

    {children}
   </AuthContext.Provider>
  )
}
