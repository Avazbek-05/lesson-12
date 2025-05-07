import { useContext } from "react";
import { ShopContext } from "../../context/shop-context/shopContext";
import LikeCard from "./likeCard/likeCard";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const { state } = useContext(ShopContext);
    const navigate = useNavigate();
  
  const likeItems = state?.like || [];
  
  return (
 <section className="mt-[180px]">
     <div className="container1 grid grid-cols-4 gap-4  max-[600px]:grid-cols-1">
      {likeItems.length > 0 ? (
        likeItems.map((item) => <LikeCard key={item.id} {...item} />)
      ) : (
    <div className="flex flex-col h-[400px] justify-center gap-5 items-center">
          <p>Hozircha like qilingan mahsulotlar yo‘q.</p>
          <Button onClick={()=>navigate('/')}>Home Page</Button>
    </div>
      )}
    </div>
 </section>
  );
};

export default Like;
