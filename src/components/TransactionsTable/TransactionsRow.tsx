import React, {FC, useMemo} from "react";
import {TransactionRowProps as Props} from "../../types/transactions";
import {TableRow} from "./styles";

const TransactionRow: FC<Props> = ({transaction}) => {
    const transactionValue = useMemo(() => {
        let value = transaction.formattedValue;

        if (transaction.type === 'outcome') {
            value = `- ${value}`;
        }

        return value;
    }, [transaction.type, transaction.formattedValue]);

    return (
        <>
            <TableRow>
                <td>
                    <strong className='title'>{transaction.title}</strong>
                    <span>{transaction.category.title}</span>
                </td>
                <td>
                    <strong className={transaction.type}>{transactionValue}</strong>
                    <span className='transactionDate'>{transaction.formattedDate}</span>
                </td>
            </TableRow>
        </>
    )
}

export default TransactionRow;
