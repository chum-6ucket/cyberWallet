import {FC} from "react";
import {Container} from "./styles";

interface BalanceProps {
    totalBalance: string;
}

const BalanceTotal: FC<BalanceProps> = ({totalBalance}) => {

    return (
        <Container>
            <h4>AirWallet Balance</h4>
            <h3>
                <span className='balance-total' data-testid='balance-total'>
                    {totalBalance}
                </span>
            </h3>
        </Container>
    )
}

export default BalanceTotal;
