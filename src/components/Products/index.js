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
            products: [],
            type: ''
        };
    }

    componentDidMount() {
        const { brand, type } = this.state;
        this.props.getProducts(brand, type)
    }

    getProducts = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
          }, () => {
            const { brand, type } = this.state;
            this.props.getProducts(brand, type);
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
                    onSelectChange={this.getProducts} 
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