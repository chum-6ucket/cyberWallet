import React, {FC, useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {GlobalStateContext} from "../../contexts";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

// @ts-ignore
const GuestRoute: FC = ({children}) => {

    const {session, setSessionState} = useContext(GlobalStateContext);

    const {data} = useSWR(
        `http://localhost:1337/api/sessions`,
        fetcher,
    )

    useEffect(() => {
        if (data) {
            // @ts-ignore
            setSessionState(data)
        }
    }, [data, session, setSessionState])

    return (
        session ? <Navigate to={'/'}/> : children
    );
};

export default GuestRoute;
