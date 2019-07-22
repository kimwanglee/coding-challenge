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
            ],
            types: [
                { label: 'All', value: '' },
                { label: 'Blush', value: 'blush' },
                { label: 'Bronzer', value: 'bronzer' },
                { label: 'Eyebrow', value: 'eyebrow' },
                { label: 'Eyeliner', value: 'eyeliner' },
                { label: 'Foundation', value: 'foundation' },
                { label: 'Lip liner', value: 'lip_liner' },
                { label: 'Lipstick', value: 'lipstick' },
                { label: 'Mascara', value: 'mascara' },
                { label: 'Nail polish', value: 'nail_polish' }
            ]
        };
    }

    searchProductsByName = evt => {
        this.props.onProductNameChange(evt.target.value);
    }

    getProducts = evt => {
        this.props.onSelectChange(evt);
    }

    render() {
        const { brands, types } = this.state;

        return (
            <div className="filter-bar">
                <div className="form-field">
                    <label>Name</label>
                    <input name="product" onChange={this.searchProductsByName} />
                </div>
                <div className="form-field">
                    <label>Brand</label>
                    <select name="brand" onChange={this.getProducts}>
                        {brands.map(brand => (<option key={brand} value={brand}>{brand}</option>))}
                    </select>
                </div>
                <div className="form-field">
                    <label>Product Type</label>
                    <select name="type" onChange={this.getProducts}>
                        {types.map(type => (<option key={type.value} value={type.value}>{type.label}</option>))}
                    </select>
                </div>
            </div>
        );
    }
}

Filter.propTypes = {
    onSelectChange: PropTypes.func.isRequired,
    onProductNameChange: PropTypes.func.isRequired
};

export default Filter;