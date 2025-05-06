import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import swiper1 from "../../assets/imgs/swiper-1.png";
import swiper2 from "../../assets/imgs/swiper-2.png";
import swiper3 from "../../assets/imgs/swiper-3.png";
import swiper4 from "../../assets/imgs/swiper-4.png";
import icon1 from "../../assets/svg/icon-1.svg";
import icon2 from "../../assets/svg/icon-2.svg";
import icon3 from "../../assets/svg/icon-3.svg";
import { Button } from "antd";
export default function Wrapper() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="mt-[180px] ">
      <Slider {...settings} className="w-full m-auto mt-5 px-4">
        <div>
          <img
            src={swiper3}
            className="rounded-[10px] w-full h-auto object-cover"
            alt="Inverter"
          />
        </div>
        <div>
          <img
            src={swiper2}
            className="rounded-[10px] w-full h-auto object-cover"
            alt="Dewalt"
          />
        </div>
        <div>
          <img
            src={swiper3}
            className="rounded-[10px] w-full h-auto object-cover"
            alt="Resanta"
          />
        </div>
        <div>
          <img
            src={swiper4}
            className="rounded-[10px] w-full h-auto object-cover"
            alt="Fubag"
          />
        </div>
      </Slider>
      <div className="mt-10 grid grid-cols-4 gap-10 max-[1111px]:gap-5 max-[1000px]:grid-cols-2 max-[570px]:grid-cols-1">
        <div className="bg-[#eee] py-[19.5px] rounded-md  px-2 flex flex-col items-center gap-2  justify-between text-center">
          <h2 className="text-lg font-bold">Добро пожаловать!</h2>
          <p className="text-[13px]">
            Войдите, чтобы оставлять отзывы и пользоваться другими функциями
            авторизованных пользователей.
          </p>
          <Button type="primary">Войти в личный кабинет</Button>
        </div>
        <div className="bg-[#d1dae6] py-[19.5px] flex items-center justify-center gap-10 rounded-md">
          <h2 className="text-[#6682a9] text-lg font-bold max-w-[103px] text-center">
            Покупать как юрлицо
          </h2>
          <img src={icon1} alt="icon1" />
        </div>
        <div className="bg-[#dbe1ff] py-[19.5px] flex flex-col items-center justify-center gap-4 text-center rounded-md">
          <img src={icon2} alt="icon2" />
          <h2 className="text-[#011c47] text-lg font-bold max-w-[158px] text-center">
            Электронный документооборот
          </h2>
        </div>
        <div className="bg-[#eee] flex py-[19.5px] flex-col items-center justify-center gap-4 rounded-md">
          <img src={icon3} alt="icon3" />
          <h2 className="text-[#fff] text-lg font-bold max-w-[158px] text-center">
            Онлайн меню для ресторанов и гостиниц
          </h2>
        </div>
      </div>
    </div>
  );
}
