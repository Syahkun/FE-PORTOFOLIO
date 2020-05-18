const initialState = {
  listTransactions: [],
  cart: [],
  is_loading: true,
  is_login: "false",
};

export default function transactionRducer(
  stateTransactions = initialState,
  action
) {
  switch (action.type) {
    case "CHANGE_INPUT_TRANSACTION":
      return {
        ...stateTransactions,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "POST_TRANSACTION":
      return {
        ...stateTransactions,
        transaction: action.payload,
        isloading: false,
      };
    case "GET_TRANSACTION":
      return {
        ...stateTransactions,
        cart: action.payload,
        is_loading: false,
      };
    default:
      return stateTransactions;
  }
}
