import { Button } from "antd";
import { Trash } from "lucide-react";
import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/shopContext";

const ShopCard = ({
  id,
  title,
  price,
  oldPrice,
  available,
  count,
  img,
  discount,
  userPrice,
}) => {
  const { state, dispatch } = useContext(ShopContext);

  return (
    <div className="border border-[#d0cfcf] p-4 rounded-md w-full">
      <h1 className="text-2xl font-bold">Корзина</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-10 max-[460px]:flex-col max-[460px]:gap-5">
          <img className="w-[150px] " src={img} alt={title} />
          <div className="flex flex-col max-[460px]:text-center gap-1">
            <h2 className="text-base font-bold ">{title}</h2>
            <p className="text-xl font-bold">
              {price.toLocaleString("ru-RU") + " so'm"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-10 max-[500px]:justify-between max-[460px]:gap-5">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => dispatch({ type: "decrement", id })}
              shape="circle"
              className="flex items-center justify-center text-lg"
            >
              -
            </Button>
            <span>{count}</span>
            <Button
              onClick={() => dispatch({ type: "increment", id })}
              shape="circle"
              className="flex items-center justify-center text-lg"
            >
              +
            </Button>
          </div>
          <h1>{userPrice.toLocaleString("ru-RU") + " so'm"}</h1>
          <Trash
            onClick={() => dispatch({ type: "delete", id })}
            className="text-red-500 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
