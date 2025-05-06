import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/shopContext";
import { Heart } from "lucide-react";

const LikeCard = ({ id, title, price, img, oldPrice }) => {
  const { dispatch } = useContext(ShopContext);

  const handleRemoveLike = () => {
    dispatch({ type: "delete_like", id });
  };

  return (
    <div className="border rounded-md border-[#cdcbcb] p-2">
      <div className="relative">
        <img
          className="w-[230px] h-[300px] object-cover mx-auto"
          src={img}
          alt={title}
        />
        <div
          onClick={handleRemoveLike}
          className="absolute top-2 right-3 cursor-pointer text-red-500"
        >
          <Heart fill="red" />
        </div>
      </div>
      <div className="pt-2">
        <h1 className="text-base font-medium">{title}</h1>
        <div className="flex items-center justify-between">
          <p>{price ? price.toLocaleString("ru-RU") + " so'm" : ""}</p>
          <p className="line-through text-sm text-gray-500">
            {oldPrice ? oldPrice.toLocaleString("ru-RU") + " so'm" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LikeCard;
