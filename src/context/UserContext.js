import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({})

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        id: '',
        username: '',
        img_url: '',
    }) 

    useEffect(() => {
        const userStorage = localStorage.getItem('user')
        if (userStorage) {
            setUser(JSON.parse(userStorage))
        } else {
            setUser({
                id: '',
                username: '',
                img_url: '',
            })
        }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}} >
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserState = () => React.useContext(UserContext)

