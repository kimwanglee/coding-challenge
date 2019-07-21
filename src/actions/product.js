import { fetchProducts } from '../api/product';


export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const SEARCH_PRODUCT_BY_NAME = 'SEARCH_PRODUCT_BY_NAME';

function setProducts(products) {
    return {
      type: GET_PRODUCTS_SUCCESS,
      products
    };
  }

function setError(error) {
    return {
        type: GET_PRODUCTS_ERROR,
        error
    };
}

export const searchProductByName = name => {
    return {
        type: SEARCH_PRODUCT_BY_NAME,
        name
    };
}

export const getProducts = brand => {
    return async dispatch => {
        return fetchProducts(brand).then(
            products => dispatch(setProducts(products)),
            error => dispatch(setError(error))
        );
    };
   
};
