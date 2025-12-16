import { createContext, useEffect, useState } from "react"



// In JS
// const UserContext = createContext({});  

type UserContextType = {
    "avatar"?: string,
    "name"?: string
}

export const UserContext = createContext<UserContextType>({
    avatar: "nopic.png",
    name: "Guest"
}); // central placeholder for data

type AppProps = {
    children: React.ReactNode
}

export default function LoginComponent({children}: AppProps) {
  let [user, setUser] = useState<{"avatar":string, "name":string}>();

  useEffect(() => {
    // after successful login
    setUser({
        "avatar": "banu.png",
        "name": "Banu Prakash"
    })
  },[]);

  return (
    <div>
        <UserContext.Provider value={{...user}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}
