import { Component, TicketX } from "lucide-react";
import React from "react";

const MenuBar = () => {
  return (
    <section>
      <div className="container1">
        <input type="checkbox" id="check" className="hidden" />

        <div className="menu-bar mt-[123px] flex flex-col items-center justify-center">
            <label htmlFor="check">
            <TicketX  size={32} className="absolute top-10 right-20 cursor-pointer" />
            </label>
          <div className="flex items-center gap-5 ">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Component />
            <a className="hover:text-[#5D78FF] text-lg" href="#">
              Смартфоны и гаджеты
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default MenuBar;
