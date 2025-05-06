import React from "react";
import telegram from "../../assets/imgs/telegram.png";
import youtube from "../../assets/imgs/youtube.png";
import instagram from "../../assets/imgs/instagram.png";
import facebook from "../../assets/imgs/facebook.png";
import payme from "../../assets/imgs/payme.png";
import click from "../../assets/imgs/click.png";
const Footer = () => {
  return (
    <footer className="my-10">
      <div className="container1 grid grid-cols-4 gap-3 max-[1200px]:grid-cols-2 max-[620px]:grid-cols-1">
        {/* 1 */}
        <div className="border border-[#e9e9e9] rounded-md p-[26px] flex flex-col gap-4">
          <h3 className="text-[#222] text-base font-bold">Контакты</h3>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#6682a9] text-base">Call-центр</p>
              <a className="text-[#222] text-base max-[306px]:text-[13px]" href="tel:+998-78 555-35-00">
                +998-78 555-35-00
              </a>
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-[#6682a9] text-base">Эл. почта</p>
              <a className="text-[#222] text-base" href="mailto:info@zon.uz">
                info@zon.uz
              </a>
            </div>
            <div className="flex items-start flex-col gap-1 w-full ">
              <p className="text-[#6682a9] text-base">График работы</p>
              <div className="flex items-center gap-2 justify-between w-full text-base text-[#222]">
                <p>В будние</p>
                <p>с 09:00 до 18:00</p>
              </div>
              <div className="flex items-center gap-2 justify-between w-full text-base text-[#222]">
                <p>В будние</p>
                <p>с 09:00 до 18:00</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-2 justify-between">
          <div className="p-4 border border-[#e9e9e9] rounded-md flex flex-col gap-2">
            <h3 className="text-[#222] text-base font-bold">
              Мы в социальных сетях
            </h3>
            <div className="flex items-center justify-between">
              <img src={telegram} alt="telegram" />
              <img src={youtube} alt="youtube" />
              <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
          <div className="p-4 border border-[#e9e9e9] rounded-md flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <img src={payme} alt="payme" />
              <img src={click} alt="click" />
            </div>
            <div>
              <p className="text-center text-[#222] text-[15px]">
                Интренет магазин Zon.uz 2017-2024. Все права защищены
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="border border-[#e9e9e9] rounded-md p-[21px] flex flex-col gap-3">
          <h3 className="text-[#222] text-base font-bold">Компания</h3>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[#6682a9] text-base max-[1370px]:flex-col max-[1370px]:items-start">
              <a href="#">О нас</a>
              <a href="#">Продавайте на Zon.uz</a>
            </div>
            <div className="flex items-center justify-between text-[#6682a9] text-base max-[1370px]:flex-col max-[1370px]:items-start">
              <a href="#">Реквизиты</a>
              <a href="#">Покупать как юрлицо</a>
            </div>
            <a className="text-[#6682a9] text-base" href="#">Контакты</a>
            <a className="text-[#6682a9] text-base" href="#">Вакансии</a>
            <a className="text-[#6682a9] text-base" href="#">Карта сайта</a>
            <a className="text-[#6682a9] text-base" href="#">Публичная оферта</a>
          </div>
        </div>
        {/* 4 */}
        <div className="border border-[#e9e9e9] rounded-md p-[21px] flex flex-col gap-3">
        <h3 className="text-[#222] text-base font-bold">Помощь</h3>
        <div className="flex flex-col gap-1.5">
            <a className="text-[#6682a9] text-base" href="#">Вопросы и ответы</a>
            <a className="text-[#6682a9] text-base" href="#">Условия рассрочки</a>
            <a className="text-[#6682a9] text-base" href="#">Способ оптлаты</a>
            <a className="text-[#6682a9] text-base" href="#">Доставка</a>
            <a className="text-[#6682a9] text-base" href="#">Возврат товаров</a>
            <a className="text-[#6682a9] text-base" href="#">Сервисные центры</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
