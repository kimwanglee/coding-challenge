import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Filter from '../Filter';
import List from '../List';
import { getProducts, searchProductByName } from '../../actions/product';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brand: 'almay',
            products: []
        };
    }

    componentDidMount() {
        const { brand } = this.state;
        this.props.getProducts(brand)
    }

    getProductsByBrand = brand => {
        this.setState({ brand }, () => {
            this.props.getProducts(brand);
        });
    }

    searchProductsByName = name => {
        this.props.searchProductByName(name);
    }

    render() {
        const { products } = this.props;

        return (
            <div className="products">
                <h1>Product List</h1>
                <Filter 
                    onProductNameChange={this.searchProductsByName} 
                    onBrandChange={this.getProductsByBrand} 
                />
                <List data={products} />
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    searchProductByName: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
      products: state.filteredData
    };
};

export default connect(mapStateToProps, { getProducts, searchProductByName })(Products);