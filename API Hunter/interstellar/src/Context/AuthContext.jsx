import { createContext, useState } from "react";

// useContext --> CPC (Create, Provide, Consume)

// C --> Create Context
export const AuthContext = createContext()

// P --> Provide Context
function AuthContextProvider({children}) {

    const initialState = {
        isAuth: false,
        token: null
    }

    const [isAuth, setIsAuth] = useState(initialState);

    const loginUser = (token) => {
        setIsAuth({
            isAuth: true,
            token: token
        })
    }

    const logoutUser = () => {
        setIsAuth({
            isAuth: false,
            token: null
        })
    }

    return <AuthContext.Provider value={{isAuth, loginUser, logoutUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;