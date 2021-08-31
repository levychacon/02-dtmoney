import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";
import { FormEvent } from "react";
import { api } from "../../services/api";


Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {

  const [type, setType] = useState("deposit");

  const[value, setValue] = useState(0);
  const[title, setTitle]= useState('');
  const[category, setCategory]= useState('')

  const handleCreateNewTransaction=(event:FormEvent)=>{
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" value={title}  onChange={event=> setTitle(event.target.value)} />

        <input  placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor='green'
          >
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor='red'

          >
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={event=>setCategory(event.target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
