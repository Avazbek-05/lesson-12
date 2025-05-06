import React, { useContext } from "react";
import ShopCard from "./shopCard/shopCard";
import { Button } from "antd";
import { ShopContext } from "../../context/shop-context/shopContext";

const Shop = () => {
  const { state, dispatch } = useContext(ShopContext);
  const totalPrice = state.data.reduce(
    (acc, value) => (acc += value.userPrice),
    0
  );
  return (
    <section className="mt-[180px]">
      <div className="container1 flex items-start gap-5 max-[1060px]:flex-col">
        <div className="w-full flex flex-col gap-4">
          {state.data.map((value) => (
            <ShopCard key={value.id} {...value} />
          ))}
        </div>
        <div className="w-[600px] max-[1060px]:m-auto max-[666px]:w-full  border border-[#d0cfcf] p-4 rounded-md flex flex-col gap-2">
          <div className="flex items-center text-2xl font-bold justify-between">
            <h1>Итого</h1>
            <h3>{totalPrice.toLocaleString("ru-RU")} so'm</h3>
          </div>
          <div className="flex items-center text-xl font-bold justify-between">
            <h1>Доставка</h1>
            <h3>бесплатно</h3>
          </div>
          <p className="text-base">
            Для заказа товаров требуется регистрация. Если вы уже
            зарегистрированы, войдите в свою учетную запись
          </p>
          <Button className="w-full text-base font-medium" type="primary">
            Заказать
          </Button>

          <p className="text-base">
            Согласен с условиями{" "}
            <span className="font-bold">
              Правил пользования торговой площадкой и правилами возврата
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Shop;
