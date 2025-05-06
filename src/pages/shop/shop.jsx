import React, { useContext } from "react";
import ShopCard from "./shopCard/shopCard";
import { Button, Col, Empty, Form, Input, Row } from "antd";
import { ShopContext } from "../../context/shop-context/shopContext";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

const Shop = () => {
  const { state, dispatch } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalPrice = state.data.reduce(
    (acc, value) => (acc += value.userPrice),
    0
  );
  if (!state.data.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <Empty className="mb-4" />
          <Button onClick={() => navigate("/")}>Home Page</Button>
        </div>
      </div>
    );
  }
  return (
    <section className="mt-[180px]">
      <div className="container1 ">
        <div className=" flex items-start gap-5 max-[1060px]:flex-col">
          <div className="w-full flex flex-col gap-4">
            {state.data.map((value) => (
              <ShopCard key={value.id} {...value} />
            ))}
            <div className="border border-[#d0cfcf] p-4 rounded-md flex flex-col gap-3">
              <div className="flex items-center gap-2 justify-between text-center max-[676px]:flex-col ">
                <h2 className="text-xl font-bold max-[1203px]:font-medium max-[1203px]:text-base ">
                  Контактные данные получателя заказа 
                </h2>
                <div className="flex items-center gap-2 border-2 border-[#6782a9] py-0.5 cursor-pointer w-fit px-2 rounded-3xl max-[520px]:w-full justify-center">
                  <User className="text-[#6782a9]" />
                  <p className="text-[#6782a9]"> Войти или создать аккаунт</p>
                </div>
              </div>
              <p className="text-base max-[676px]:text-center">
                Зарегистрируйтесь и получите
                <span className="font-bold">50 000 сум</span>
              </p>

              <Form layout="vertical">
                <Row gutter={16}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Имя"
                      name="name"
                      rules={[
                        { required: true, message: "Пожалуйста, введите имя!" },
                      ]}
                    >
                      <Input placeholder="Введите имя" size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Номер телефона"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Пожалуйста, введите номер!",
                        },
                      ]}
                    >
                      <Input placeholder="+998 99 1234567" size="large" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
          <div className="w-[600px] max-[1060px]:m-auto max-[666px]:w-full  border border-[#d0cfcf] p-4 rounded-md flex flex-col gap-2">
            <div className="flex items-center text-2xl font-bold justify-between">
              <h1>Итого</h1>
              <h3>{totalPrice.toLocaleString("ru-RU")} so'm</h3>
            </div>
            <div className="flex items-center text-xl font-bold justify-between">
              <h1>Доставка</h1>
              <h3>бесплатно</h3>
            </div>
            <p className="text-base">
              Для заказа товаров требуется регистрация. Если вы уже
              зарегистрированы, войдите в свою учетную запись
            </p>
            <Button className="w-full text-base font-medium" type="primary">
              Заказать
            </Button>

            <p className="text-base">
              Согласен с условиями{" "}
              <span className="font-bold">
                Правил пользования торговой площадкой и правилами возврата
              </span>
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Shop;
