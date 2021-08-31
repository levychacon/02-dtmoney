import {createContext, useEffect, useState,ReactNode} from 'react'
import { api } from './services/api';

interface TransactionParameters {
    id: string;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
  }

  interface TransactionProviderProps{
    children: ReactNode;

  }

export const TransactionsContext = createContext<TransactionParameters[]>([])



export function TransactionsProvider (props: TransactionProviderProps){

    const [transactions, setTransactions] = useState<TransactionParameters[]>([]);
    useEffect(() => {
      api("transactions").then((response) =>
        setTransactions(response.data.transactions)
      );
    }, []);

    return(
        <TransactionsContext.Provider value={transactions}>
          {props.children}
        </TransactionsContext.Provider>
    )
    

}