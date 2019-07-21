import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ERROR, 
    SEARCH_PRODUCT_BY_NAME,
    GET_PRODUCT_BY_ID
} from '../actions/product';

const initState = {
    data: [],
    filteredData: [],
    selectedProduct: [],
    error: ''
};

const productReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          data: action.products,
          filteredData: action.products
        };
    case GET_PRODUCTS_ERROR:
        return {
            ...state,
            error: action.error
        };
    case SEARCH_PRODUCT_BY_NAME:
        return {
            ...state,
            filteredData: state.data.filter(product => product.name.startsWith(action.name))
        };
    case GET_PRODUCT_BY_ID:
        return {
            ...state,
            selectedProduct: state.data.find(product => product.id === action.id)
        };
      default:
        return state;
    }
  };
  
  export default productReducer;