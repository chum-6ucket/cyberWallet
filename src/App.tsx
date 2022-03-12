import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages';
import GuestRoute from "./components/GuestRoute";
import {GlobalStateContext} from './contexts';

import GlobalStyle from './styles/global';
import Signup from './pages/auth/Signup/Signup';
import LoginPage from './pages/auth/Signin/Login';
import { TestPage } from './pages/testpage';

function App() {

    const [session, setSession] = useState(null);

    function setSessionState(state: null) {
        setSession(state);
    }

    console.log("App session state:" + session)

    return (
        <>
            <GlobalStyle/>
            <GlobalStateContext.Provider
                value={{
                    session,
                    setSessionState,
                }}
            >
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/test' element={<TestPage/>}/>
                            <Route
                                path='/login'
                                element={
                                    <GuestRoute>
                                        <LoginPage/>
                                    </GuestRoute>
                                }/>
                            <Route
                                path='/registration'
                                element={
                                    <GuestRoute>
                                        <Signup/>
                                    </GuestRoute>
                                }/>
                        </Routes>
                    </div>
                </Router>
            </GlobalStateContext.Provider>
        </>
    );
}

export default App;
