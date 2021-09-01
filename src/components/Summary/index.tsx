import { Container } from "./styles"
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export const Summary=()=>{
    const {transactions} = useContext(TransactionsContext);
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImage} alt='income'></img>
                </header>
                <strong>1000</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImage} alt='outcome'></img>
                </header>
                <strong>-500</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImage} alt='total'></img>
                </header>
                <strong>500</strong>
            </div>

        </Container>
    )
}