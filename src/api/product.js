export const fetchProducts = (brand, type) => fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${type}`).then(response => {
    return response.json();
}).catch(error => {
    return error;
});
