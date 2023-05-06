import { getItem } from "../services/LocalStorageFuncs";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md"
import styled from "styled-components";
import { useState } from "react";
import { Loading } from "../components/Loading";

const PaymentArea = styled.div`
  span {
    font-size: 80px;
    color: green;
  }
`;

export const Payment = (props: any) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const {
    params: { price },
  } = props.match;

  const user = getItem("usuario");

  return (
    <>
      {loading ? (
        <Loading />
      ) : user.saldo < price ? (
        <div>
            <span>
                <MdCancel style={{ fontSize: '45px', color: 'red'}}/>
            </span>
            <p>Seu saldo é insuficiente!</p>
        </div>
        
      ) : (
        <PaymentArea>
          <h2>Sua compra foi concluída com sucesso!</h2>
          <span>
            <AiFillCheckCircle />
          </span>
          <h4>{`Valor: R$ ${price}`}</h4>
          <h4>{`Comprador: ${user.name}`}</h4>
          <h4>{`Prazo: ${Math.ceil(Math.random() * 20) + 1} dias`}</h4>
        </PaymentArea>
      )}
    </>
  );
};
