import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getProducts } from '../../actions/product';

const ProductColors = props => (
    <div className="product-colors">
        <h2>Colors</h2>
        <div className="product-colors--container">
            {props.colors.map((color, index) => (
                <div className="product-colors--item" key={index}>
                    <span className="color-circle" style={{ backgroundColor: color.hex_value}}></span>
                    {color.colour_name}
                </div>
            ))}
        </div>
    </div>
);

class ProductDetail extends Component {
    componentDidMount() {
        const { match } = this.props;
        this.props.getProducts(match.params.brand);
    }

    render() {
        const { products, match } = this.props;
        const product = (products || []).find(item => item.id === parseInt(match.params.id));

        return (
            <>
                {
                    product ? (
                        <div className="product-details">
                            <h1>{product.name}</h1>
                            <div className="product-details-container">
                                <div className="image">
                                    <img src={product.image_link} alt={product.name} />
                                </div>
                                <div className="product-informations">
                                    <ul>
                                        <li>Brand: {product.brand}</li>
                                        <li>Price: {product.price} €</li>
                                        <li>Category: {product.category || '-'}</li>
                                        <li>Rating: {product.rating || 'unrated'}</li>
                                    </ul>
                                    <div className="product-description">{product.description}</div>
                                    {
                                        product.product_colors.length > 0 
                                        && (<ProductColors colors={product.product_colors} />)
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (<div>No product with id {match.params.id} found!</div>)
                }
            </>
        );
    }
};


ProductDetail.propTypes = {
    products: PropTypes.array,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

const mapStateToProps = state=> {
    return {
      products: state.filteredData
    };
};

export default withRouter(connect(mapStateToProps, { getProducts })(ProductDetail));
