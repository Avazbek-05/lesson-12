import React from "react";
import { useAxiosGet } from "../../hooks/useAxios";
import Card from "./card/card";
import Status from "../../components/status/status";
import Wrapper from '../../components/wrapper/wrapper'

const Home = () => {
  const { data, loading } = useAxiosGet({ url: "/zonUz" });

  return (
    <section>
      <div className="container1">
        <Wrapper/>

        <div className="my-3 ">
          <h1 className="text-2xl font-medium">Популярные: </h1>
          <div className="grid grid-cols-5 gap-4 mt-5  max-[1270px]:grid-cols-4 max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[500px]:grid-cols-1">
            {data.map((value) => (
              <Card key={value.id} {...value} />
            ))}
          </div>
        </div>
        <Status />
      </div>
    </section>
  );
};

export default Home;
