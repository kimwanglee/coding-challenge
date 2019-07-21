export const fetchProducts = brand => fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`).then(response => {
    return response.json();
}).catch(error => {
    return error;
});
