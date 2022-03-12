import {createContext} from "react";


type SessionData = {
    session: null;
    setSessionState: (state: null) => void;
}

export const GlobalStateContext = createContext({} as SessionData);
