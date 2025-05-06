import { createContext, useReducer } from "react";

const ShopContext = createContext({});

const ShopContextProvider = ({ children }) => {
  const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
    like: JSON.parse(localStorage.getItem("like")) || [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "add_like":
        const isAlreadyLiked =
          state.like && Array.isArray(state.like)
            ? state.like.find((value) => value.id === action.like.id)
            : undefined;

        if (!isAlreadyLiked) {
          const newLikes = [...state.like, action.like];
          localStorage.setItem("like", JSON.stringify(newLikes));
          return { ...state, like: newLikes };
        }
        return state;
      case "delete_like":
        const updatedLikes = state.like.filter((item) => item.id !== action.id);
        localStorage.setItem("like", JSON.stringify(updatedLikes));
        return { ...state, like: updatedLikes };
      case "add_product":
        if (state.data.find((value) => value.id === action.data.id)) {
          const updatedData = state.data.map((value) => {
            if (value.id === action.data.id) {
              return {
                ...value,
                count: value.count + 1,
                userPrice: (value.count + 1) * action.data.price,
              };
            }
            return value;
          });

          localStorage.setItem("data", JSON.stringify(updatedData));
          return { data: updatedData };
        }
        let newData = {
          data: [
            ...state.data,
            { ...action.data, count: 1, userPrice: action.data.price },
          ],
        };
        localStorage.setItem("data", JSON.stringify(newData.data));
        return newData;

      case "increment":
        const updatedDataIncrement = state.data.map((value) => {
          if (value.id === action.id) {
            return {
              ...value,
              count: value.count + 1,
              userPrice: (value.count + 1) * value.price,
            };
          }
          return value;
        });
        localStorage.setItem("data", JSON.stringify(updatedDataIncrement));
        return { data: updatedDataIncrement };

      case "decrement":
        const updatedDataDecrement = state.data.map((value) => {
          if (value.id === action.id) {
            return {
              ...value,
              count: value.count <= 1 ? 1 : value.count - 1,
              userPrice:
                value.count <= 1
                  ? value.price
                  : (value.count - 1) * value.price,
            };
          }
          return value;
        });
        localStorage.setItem("data", JSON.stringify(updatedDataDecrement));
        return { data: updatedDataDecrement };

      case "delete":
        const deleteProduct = state.data.filter(
          (value) => value.id !== action.id
        );
        localStorage.setItem("data", JSON.stringify(deleteProduct));
        return { data: deleteProduct };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
