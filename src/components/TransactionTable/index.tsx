import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export const TransactionTable = () => {
  useEffect(() => {
    api("transactions").then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Freelancer</td>
            <td>12/05/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 12.000</td>
            <td>Casa</td>
            <td>16/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
