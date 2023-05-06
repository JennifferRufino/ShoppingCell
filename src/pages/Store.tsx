import { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { Link } from "react-router-dom";
import { ProductsArea } from "../styles/style";

type StoreProsp = {
  id: string;
  price: number;
  title: string;
  thumbnail: string;
};

export const Store = () => {
  const [data, setData] = useState<StoreProsp[]>([]);
  const [cart, setCart] = useState<StoreProsp[]>(getItem("carrinhoYt") || []);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLB/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (event: StoreProsp) => {
    const element = cart.find((e) => e.id === event.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== event.id);
      setCart(arrFilter);
      setItem("carrinhoYt", arrFilter);
    } else {
      setCart([...cart, event]);
      setItem("carrinhoYt", [...cart, event]);
    }
  };

  return (
    <div>
      <ProductsArea>
        {data.map((d: any) => (
          <div key={d.id}>
            <h4>{d.title}</h4>
            <img src={d.thumbnail} alt="" />
            <h4>R$ {d.price}</h4>
            <button onClick={() => handleClick(d)}>
              {cart.some((itemCart) => itemCart.id === d.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
