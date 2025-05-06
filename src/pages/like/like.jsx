import { useContext } from "react";
import { ShopContext } from "../../context/shop-context/shopContext";
import LikeCard from "./likeCard/likeCard";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const { state, dispatch } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <section className="mt-[180px]">
      <div className="container1 grid grid-cols-5 gap-4">
        {state.like.map((value) => (
          <LikeCard key={value.id} {...value} />
        ))}
      </div>
    </section>
  );
};

export default Like;
