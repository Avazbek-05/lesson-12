import { Heart } from "lucide-react";
import React, { useContext } from "react";
import addCard from "../../../assets/svg/addCart.svg";
import { ShopContext } from "../../../context/shop-context/shopContext";
import toast from "react-hot-toast";
const Card = (value) => {
  const { state, dispatch } = useContext(ShopContext);

  let { id, title, price, oldPrice, available, img, discount } = value;
  const isLiked = state?.like?.some((item) => item.id === id);




  return (
    <div className="shadow-lg rounded-2xl relative transition-transform duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-[230px] flex items-center justify-center m-auto h-[300px]"
        />
        <div
          onClick={() => {
            dispatch({ type: "add_like", like: value }); // Ensure 'like' is passed correctly
            toast.success("Like qo'shildi ! ");
          }}
          className="absolute top-3 right-2"
        >
          <Heart
            fill={isLiked ? "red" : "none"}
            stroke={isLiked ? "red" : "currentColor"} // border ham qizil bo'ladi
            className="cursor-pointer"
          />
        </div>
        <p className="absolute left-2 bottom-2 px-1 text-[#f00] text-base font-bold bg-[#fff7fc] rounded-2xl">
          {discount}
        </p>
      </div>
      <div className="mt-2 flex flex-col  pb-3 gap-2 px-4 ">
        <h2 className="text-[15px]">{title.slice(0, 90) + "..."}</h2>
        <p
          className={`min-h-[20px] text-sm font-bold w-fit px-2.5 rounded-2xl ${
            available
              ? "text-[#f64e60] bg-[#ffe2e5]"
              : "text-transparent bg-transparent"
          }`}
        >
          {available ?? ""}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#212427] text-base font-bold">
              {price.toLocaleString("ru-RU")} so'm
            </p>
            {oldPrice && (
              <p className="text-[#9ca3af] line-through">
                {oldPrice.toLocaleString("ru-RU")} so'm
              </p>
            )}
          </div>
          <button
            onClick={() => {
              dispatch({ type: "add_product", data: value });
              toast.success("Savadtga qo'shildi ! ");
            }}
            className="border border-[#ddd] p-1 rounded-full cursor-pointer"
          >
            <img src={addCard} alt="addCard" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
