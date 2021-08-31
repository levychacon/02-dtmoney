import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";


export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setisNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setisNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      ></Header>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      ></NewTransactionModal>
      <Dashboard />

      <GlobalStyle />
    </>
  );
}
