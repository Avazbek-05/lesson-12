import React, { useContext } from "react";

import logo from "../../../assets/svg/logo.svg";
import catalog from "../../../assets/svg/catalog.svg";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Badge, Button } from "antd";
import { ShopContext } from "../../../context/shop-context/shopContext";
import { useNavigate } from "react-router-dom";
const NavbarBottom = () => {
  const { state, dispatch } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <section className=" border-t border-b border-[#c2cddd]">
      <div className="container1 flex flex-col gap-2">
        <div className=" py-[16.5px] flex items-center justify-between gap-5">
          <div className="flex items-center gap-[30px]">
            <img
              onClick={() => navigate("/")}
              className="w-[139px] h-[26px] cursor-pointer max-[350px]:w-[100px] max-[290px]:w-[90px]"
              src={logo}
              alt="logo"
            />
            <button className="border-2 border-[#011c47] rounded-md p-[6px_14px] max-[309px]:p-1.5 flex items-center gap-2 cursor-pointer">
              <img src={catalog} alt="catalog" />
              <p className="text-[#011c47] text-base font-bold max-[510px]:hidden">
                Каталог
              </p>
            </button>
            <div className="border border-[#6682a9] rounded-md flex w-[762px] max-[1328px]:w-[600px] max-[1140px]:w-[500px] max-[1065]:w-[400px] items-center justify-between  max-[1040px]:hidden">
              <input
                className="pl-3 text-[#c2cddd] text-[15px] font-bold outline-none w-full"
                type="text"
                placeholder="Найти товары"
              />
              <div className="p-[6px_12px] bg-[#d1dae6] rounded-[0px_5px_5px_0]">
                <Search className="text-[#6682A9]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Badge
              onClick={() => navigate("/shop")}
              count={
                state.data && Array.isArray(state.data) ? state.data.length : 0
              } // state.data tekshiruvi
            >
              <ShoppingCart className="cursor-pointer max-[455px]:hidden" />
            </Badge>

            <Badge
              onClick={() => navigate("/like")}
              count={
                state.like && Array.isArray(state.like) ? state.like.length : 0
              } // state.like tekshiruvi
            >
              <Heart className="cursor-pointer max-[455px]:hidden" />
            </Badge>

            <Button className="cursor-pointer" type="primary">
              Войти
            </Button>
          </div>
        </div>
        <div className="hidden max-[1040px]:block mb-2">
          <div className="border  border-[#6682a9] rounded-md flex w-full items-center justify-between ">
            <input
              className="pl-3 text-[#c2cddd] text-[15px] font-bold outline-none w-full"
              type="text"
              placeholder="Найти товары"
            />
            <div className="p-[6px_12px] bg-[#d1dae6] rounded-[0px_5px_5px_0]">
              <Search className="text-[#6682A9]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarBottom;
