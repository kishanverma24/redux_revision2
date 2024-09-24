import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/Cartslice";

const Cart = () => {
  const cartitems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleremove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-around",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {cartitems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            height: "200px",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "5px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <img
            style={{ height: "40px", width: "40px" }}
            src={item.image}
            alt="img"
          />
          <h4 style={{ fontSize: "10px" }}>{item.title}</h4>
          <h5 style={{ fontSize: "10px" }}>{item.price}</h5>
          <button
            style={{
              backgroundColor: "red",
              border: "none",
              fontWeight: "bolder",
              padding: "3px",
              cursor: "pointer",
            }}
            onClick={() => handleremove(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
