const initialState = {
  listProducts: [],
  is_loading: true,
  is_login: "false",
  product: [],
};

export default function productReducer(stateProducts = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_PRODUCT":
      return {
        ...stateProducts,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "REQUEST_LIST_PRODUCTS":
      return {
        ...stateProducts,
        is_loading: false,
        listProducts: action.payload,
      };
    case "ACTIVATE_LOADING":
      return {
        ...stateProducts,
        isLoading: true,
      };
    case "DEACTIVATE_LOADING":
      return {
        ...stateProducts,
        isLoading: false,
      };
    case "REQUEST_LIST_PRODUCTS_CATEGORY":
      return {
        ...stateProducts,
        listProducts: action.payload,
        isLoading: false,
      };
    case "REQUEST_LIST_PRODUCTS_BY_ID":
      return {
        ...stateProducts,
        isLoading: false,
        product: action.payload,
      };
    case "SUCCESS_POST_PRODUCT":
      return {
        ...stateProducts,
        data: action.payload,
        is_loading: false,
        is_login: true,
      };
    default:
      return stateProducts;
  }
}
