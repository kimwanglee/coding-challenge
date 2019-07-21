import { 
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ERROR, 
    SEARCH_PRODUCT_BY_NAME 
} from '../actions/product';

const initState = {
    data: [],
    filteredData: [],
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
      default:
        return state;
    }
  };
  
  export default productReducer;