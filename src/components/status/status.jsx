import React from "react";
import status1 from "../../assets/imgs/status-1.png";
import status2 from "../../assets/imgs/status-2.png";
import status3 from "../../assets/imgs/status-3.png";
import status4 from "../../assets/imgs/status-4.png";
import status5 from "../../assets/imgs/status-5.png";

const statusItems = [
  {
    id:"1",
    img: status1,
    title: "Виброметры для двигателей и механизмов",
    day: "13.06.2023",
  },
  {
    id:"2",
    img: status2,
    title: "Частотный преобразователь — что такое и для чего он нужен",
    day: "12.06.2023",
  },
  {
    id:"3",
    img: status3,
    title: "Зачем нужен такой прибор, как лазерный тахометр?",
    day: "11.06.2023",
  },
  {
    id:"4",
    img: status4,
    title: "Люксометр - Измеритель яркости и освещённости",
    day: "10.04.2023",
  },
  {
    id:"5",
    img: status5,
    title: "Термометр для измерения температуры объекта",
    day: "09.04.2023",
  },
];
const Status = () => {
  return (
    <section className="my-8">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-medium">Статьи</h1>
        <button className="border border-[#ddd] rounded-2xl p-[4px_10px] text-[#1b7da2] text-[15px] font-medium cursor-pointer hover:bg-[#e1eef4] translate-all duration-300">
          Смотреть все
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-4 max-[1000px]:grid-cols-4 max-[840px]:grid-cols-3 max-[670px]:grid-cols-2 max-[380px]:grid-cols-1">
        {statusItems.map((value) => (
          <div key={value.id} className="border border-[#ddd] rounded-md">
            <img className="rounded-[6px_6px_0_0] w-full" src={value.img} alt={value.title} />
            <div className="flex flex-col p-2 text-[15px] max-[1270px]:text-[12px]">
                <p className="text-[#6682a9]">{value.day}</p>
                <h2 className="text-[#000]">{value.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Status;
