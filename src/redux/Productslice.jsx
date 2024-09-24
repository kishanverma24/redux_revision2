import { createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
export const STATUS = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "Error",
  Loading: "LOADING",
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.SUCCESS,
  },
  reducers: {
    setproducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setproducts, setStatus } = productSlice.actions;
export default productSlice.reducer; // reducers ko hm store ke andr jakr store kr dete hai jbki actions ko hm call krte hai

// middleware

// export const fetchProduct = () => {
//   //   const dispatch = useDispatch();
//   return async function fetchproductThunk(dispatch) {
//     console.log("loading");

//     dispatch(setStatus(STATUS.Loading));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();

//       dispatch(setproducts(data));
//       dispatch(setStatus(STATUS.SUCCESS));
//     } catch (error) {
//       console.log(error.message);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// };
