import React from "react";
import { useEffect } from "react";
import { add } from "../redux/Cartslice";
import { useDispatch, useSelector } from "react-redux";
import { setproducts, setStatus, STATUS } from "../redux/Productslice";
const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);

  const fetchProduct = async () => {
    console.log("loading");
    console.log("hello g");
    // dispatch(setStatus(STATUS.Loading));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      dispatch(setproducts(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log("message is ::::::::::", error.message);
      dispatch(setStatus(STATUS.ERROR));
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleadd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUS.Loading) {
    return <h2 style={{ fontWeight: "bolder",marginTop:"100px" }}>Loading...</h2>;
  }
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
      {console.log("loading", data)}

      {data.map((product) => (
        <div
          key={product.id}
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
            src={product.image}
            alt="img"
          />
          <h4 style={{ fontSize: "10px" }}>{product.title}</h4>
          <h5 style={{ fontSize: "10px" }}>{product.price}</h5>
          <button
            style={{
              backgroundColor: "green",
              border: "none",
              fontWeight: "bolder",
              padding: "3px",
              cursor: "pointer",
              fontSize: "15px",
            }}
            onClick={() => handleadd(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
