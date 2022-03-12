import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";

export interface GlobalStateInterface {
    session: null;
    setSession: () => {}
}

const GlobalStateContext = createContext({
    state: {} as Partial<GlobalStateInterface>,
    setState: {} as Dispatch<SetStateAction<Partial<GlobalStateInterface>>>,
});

interface GlobalStateProviderInterface {
    children: React.ReactNode;
    value?: Partial<GlobalStateInterface>;
}

const GlobalStateProvider = ({
                                 children,
                                 value = {} as GlobalStateInterface,
                             }: GlobalStateProviderInterface) => {
    const [state, setState] = useState(value);
    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateContext");
    }
    return context;
};

const Debug = () => {
    const { state } = useGlobalState();
    return <pre>{JSON.stringify(state || {}, null, "\t")}</pre>;
};

export { GlobalStateProvider, useGlobalState, Debug };