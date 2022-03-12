import React from "react";
import useSWR from "swr";
import {AxiosResponse} from "axios";
import {Balance, Transaction} from "../../types/transactions";
import api from "../../services/api";
import TransactionsTable from "../../components/TransactionsTable";
import formatTransactions from "../../helpers/formatTransactions";
import {Container} from "./styles";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import formatBalance from "../../helpers/formatBalance";
import BalanceTotal from "../../components/TotalBalance";

interface TransactionsResponse {
    transactions: Transaction[];
    balance: Balance;
}

export interface User {
    _id: string;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    session: string;
    iat: number;
    exp: number;
}


export const Home = () => {
    const {data: responseData, error} = useSWR<AxiosResponse<TransactionsResponse>>('/transactions', api);

    // const { data: responseData, error } = useSWR<
    //     AxiosResponse<TransactionsResponse>
    //     >('/balance', api);


    // const {session, setSessionState} = useContext(GlobalStateContext);
    // const {data} = useSWR<User | null>(
    //     `http://localhost:1337/api/sessions`,
    //     fetcher,
    // )

    // useEffect(() => {
    //     if (!data) {
    //         setSessionState(null)
    //     }
    // }, [data, session, setSessionState])

    if (error) {
        return <div>Ops... It seems that something went wrong</div>;
    }

    if (!responseData) {
        // eslint-disable-next-line no-console
        return <Loading/>;
    }

    const formattedTransactions = formatTransactions(
        responseData?.data.transactions,
    );

    const formattedExpense = formatBalance(responseData?.data.balance);

    console.log(formattedExpense);
    return (
        <>
            <Header/>
            <BalanceTotal totalBalance={formattedExpense.formattedTotal}/>
            <Container>
                {(responseData && (
                    <TransactionsTable transactions={formattedTransactions}/>
                ))}
            </Container>

        </>
    )
}
