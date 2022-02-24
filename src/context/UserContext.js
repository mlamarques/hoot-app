import React, { useEffect, useState } from "react";

export const UserContext = React.createContext({})

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        _id: '',
        username: '',
        img_url: '',
        follows: [],
        likes: []
    }) 

    useEffect(() => {
        const userStorage = localStorage.getItem('user')
        if (userStorage) {
            setUser(JSON.parse(userStorage))
        } else {
            setUser({
                _id: '',
                username: '',
                img_url: '',
                follows: [],
                likes: []
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser}} >
            {props.children}
        </UserContext.Provider>
    )
}

export const useUserState = () => React.useContext(UserContext)

