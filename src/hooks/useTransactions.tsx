import {createContext, useEffect, useState,ReactNode, useContext} from 'react'
import { api } from '../services/api';

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

  interface TransactionsContextData{
    transactions: TransactionParameters[],
    createTransactions: (transaction: TransactionInput)=> Promise<void>;
  }

  type TransactionInput = Omit<TransactionParameters, 'id'|'createdAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)




export function TransactionsProvider (props: TransactionProviderProps){

    const [transactions, setTransactions] = useState<TransactionParameters[]>([]);
    useEffect(() => {
      api("transactions").then((response) =>
        setTransactions(response.data.transactions)
      );
    }, []);

    async function createTransactions(transactionInput:TransactionInput){

      const response = await api.post('/transactions', {...transactionInput, createdAt:new Date()} );
      const {transaction} = response.data;

      setTransactions([
        ...transactions,
        transaction
      ])
    }

    return(
        <TransactionsContext.Provider value={{transactions, createTransactions}}>
          {props.children}
        </TransactionsContext.Provider>
    )
    

}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context
}