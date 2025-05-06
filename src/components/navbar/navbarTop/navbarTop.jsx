import React from "react";
import location from "../../../assets/svg/location.svg";
import { Briefcase, ChevronDown, Handshake, Phone } from "lucide-react";
const NavbarTop = () => {
  return (
    <section>
      <div className="container1 py-[11.25px] flex items-center justify-between">
      <div className="flex items-center gap-11 max-[1090px]:gap-5">
        <div className="flex items-center gap-2">
          <img src={location} alt="location" />
          <p className="text-[#c2cddd] text-[13px] max-[335px]:hidden">Город</p>
          <a className="text-[#5d78ff] underline text-[13px]" href="#">
            Ташкент
          </a>
        </div>
        <div className="flex items-center gap-2 max-[980px]:hidden">
          <Handshake className="text-[#5D78FF]" />
          <a className="text-[#5d78ff] text-sm font-bold" href="#">
            Продавайтена Zon.uz
          </a>
        </div>
        <div className="flex items-center gap-2 max-[760px]:hidden">
          <Briefcase className="text-[#6682A9]" />
          <a className="text-[#6682a9] text-sm " href="#">
            Покупать как юрлицо
          </a>
        </div>
        <div className="flex items-center gap-2 max-[450px]:hidden">
          <a className="text-[#6682a9] text-sm" href="#">Помощь</a>
          <ChevronDown className="text-[#c2cddd] text-[11px]" />
        </div> 
        <a className="text-[#6682a9] text-sm max-[550px]:hidden" href="#">Контакты</a>
      </div>
      <div className="flex items-center gap-2.5">
        <Phone className="cursor-pointer"/>
        <a className="text-base font-bold"  href="tel:+998-78 555-35-00">+998-78 555-35-00</a>
      </div>
    </div>
    </section>
  );
};

export default NavbarTop;
