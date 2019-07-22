import { fetchProducts } from '../api/product';


export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const SEARCH_PRODUCT_BY_NAME = 'SEARCH_PRODUCT_BY_NAME';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';

const setProducts = products => {
    return {
      type: GET_PRODUCTS_SUCCESS,
      products
    };
  }

const setError = error => {
    return {
        type: GET_PRODUCTS_ERROR,
        error
    };
}

export const getProductById = id => {
    return {
        type: GET_PRODUCT_BY_ID,
        id
    };
}

export const searchProductByName = name => {
    return {
        type: SEARCH_PRODUCT_BY_NAME,
        name
    };
}

export const getProducts = (brand, type) => {
    return async dispatch => {
        return fetchProducts(brand, type).then(
            products => dispatch(setProducts(products)),
            error => dispatch(setError(error))
        );
    };
   
};
