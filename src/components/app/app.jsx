import { createContext, useEffect } from "react";
import { useState } from 'react';
import MainPage from "../../pages/main/main";
import { Route, Routes } from "react-router";
import AuthPage from "../../pages/auth/auth";
import SearchPage from "../../pages/search/search";

export const AuthContext = createContext();
export const UserInfoContext = createContext();

function App() {
    const [ logined, setLogined ] = useState(false)
    const [ userInfoLoaded, setUserInfoLoaded ] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setLogined(true)
            fetch(`https://gateway.scan-interfax.ru/api/v1/account/info`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then((res) => {
                setTimeout(() => {
                    setUserInfoLoaded(res.eventFiltersInfo)
                }, 2000);
            })
        } else {
            setLogined(false)
        }
    }, [ logined, userInfoLoaded ])

    return (
        <UserInfoContext.Provider value={userInfoLoaded}>
            <AuthContext.Provider value={logined}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='auth' element={<AuthPage />} />
                    <Route path='search' element={<SearchPage />} />
                </Routes>
            </AuthContext.Provider>
        </UserInfoContext.Provider>
        
    );
}

export default App;
