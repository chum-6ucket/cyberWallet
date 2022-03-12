import {FC} from "react";
import { TransactionsTableProps as Props } from "../../types/transactions";
import { TableContainer } from "./styles";
import TransactionRow from "./TransactionsRow";

const TransactionsTable: FC<Props> = ({ transactions }) => {

    return (
        <>
            <TableContainer>
                <header>
                    <p>Recent activity</p>
                    <p>All activity</p>
                </header>
                <table>
                    <tbody>
                    {transactions.map(transaction => (
                        <TransactionRow
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                    </tbody>
                </table>
            </TableContainer>
        </>
    )
}

export default TransactionsTable;
