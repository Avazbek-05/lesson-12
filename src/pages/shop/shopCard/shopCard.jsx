import { Button } from "antd";
import { Trash } from "lucide-react";
import { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/shopContext";

const ShopCard = ({ id, title, price, oldPrice, available,count, img, discount,userPrice }) => {
  const { state, dispatch } = useContext(ShopContext );

  return (
    <div className="border border-[#d0cfcf] p-4 rounded-md w-full">
      <h1 className="text-2xl font-bold">Корзина</h1>
      <div>
        <div className="flex items-center gap-10">
          <img
            className="w-[150px] h-[200px]"
            src={img}
            alt={title}
          />
          <div>
            <h2 className="text-base font-bold">
          {title}
            </h2>
            <p className="text-xl font-bold">{price.toLocaleString("ru-RU") + " so'm"}</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
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
          <Trash onClick={() => dispatch({ type: "delete", id })} className="text-red-500 cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
