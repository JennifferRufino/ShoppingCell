import { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { BsFillCartDashFill } from "react-icons/bs";
import { ProductsArea } from "../styles/style";

type CartProsp = {
  id: string;
  price: number;
  title: string;
  thumbnail: string;
};

export const Cart = (props: any) => {
  const [data, setData] = useState<CartProsp[]>(getItem("carrinhoYt") || []);

  const removeItem = (obj: CartProsp) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem("carrinhoYt", arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  const handleClick = () => {
    const {
      history: { push },
    } = props;
    push(`/payment/${subTotal}`);
    setItem("carrinhoYt", []);
  };

  return (
    <div>
      <h3>{`SubTotal: R$ ${subTotal}`}</h3>
      <ProductsArea>
        {data.map((d: any) => (
          <div key={d.id}>
            <h4>{d.title}</h4>
            <img src={d.thumbnail} alt="" />
            <h4> R$ {d.price}</h4>
            <button onClick={() => removeItem(d)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
      {subTotal > 0 && <button onClick={handleClick}>Comprar</button>}
      <br /> <br /> <br />
    </div>
  );
};
