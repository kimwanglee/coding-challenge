import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            brands: [
                'almay',
                'alva',
                'anna sui',
                'annabelle',
                'benefit',
                'boosh',
                'burt\'s bees',
                'butter london',
                'c\'est moi',
                'cargo cosmetics',
                'china glaze',
                'clinique',
                'coastal classic creation',
                'colourpop',
                'covergirl',
                'dalish',
                'deciem',
                'dior',
                'dr. hauschka',
                'e.l.f.',
                'essie',
                'fenty',
                'glossier',
                'green people',
                'iman',
                'l\'oreal',
                'lotus cosmetics usa',
                'maia\'s mineral galaxy',
                'marcelle',
                'marienatie',
                'maybelline',
                'milani',
                'mineral fusion',
                'misa',
                'mistura',
                'moov',
                'nudus',
                'nyx',
                'orly',
                'pacifica',
                'penny lane organics',
                'physicians formula',
                'piggy paint',
                'pure anada',
                'rejuva minerals',
                'revlon',
                'sally b\'s skin yummies',
                'salon perfect',
                'sante',
                'sinful colours',
                'smashbox',
                'stila',
                'suncoat',
                'w3llpeople',
                'wet n wild',
                'zorah',
                'zorah biocosmetiques',
            ]
        };
    }

    searchProductsByName = evt => {
        this.props.onProductNameChange(evt.target.value);
    }

    getProductsByBrand = evt => {
        this.props.onBrandChange(evt.target.value);
    }

    render() {
        const { brands } = this.state;

        return (
            <div className="filter-bar">
                <div className="form-field">
                    <label>Name</label>
                    <input name="product" onChange={this.searchProductsByName} />
                </div>
                <div className="form-field">
                    <label>Brand</label>
                    <select name="brand" onChange={this.getProductsByBrand}>
                        {brands.map(brand => (<option key={brand} value={brand}>{brand}</option>))}
                    </select>
                </div>
            </div>
        );
    }
}

Filter.propTypes = {
    onBrandChange: PropTypes.func.isRequired,
    onProductNameChange: PropTypes.func.isRequired
};

export default Filter;