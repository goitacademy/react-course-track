import { configureStore, createAction } from "@reduxjs/toolkit";

export const deposit = createAction("balance/deposit");

export const withdraw = createAction("balance/withdraw");

export const changeLang = createAction("locale/changeLang");

const initialState = {
  balance: {
    value: 500,
  },
  locale: {
    lang: "uk",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          value: state.balance.value + action.payload,
        },
      };

    case "balance/withdraw":
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };

    case "locale/changeLang":
      return {
        ...state,
        locale: {
          lang: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
