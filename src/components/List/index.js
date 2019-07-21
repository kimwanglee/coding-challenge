import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const List = props => (
    <>
        {props.data && props.data.length > 0 ? (
            <ul className="list">
                {props.data.map(item => ( 
                <li className="list--item" key={item.id}>
                <Link to={`products/${item.brand}/${item.id}`}>
                    <span>{item.name}</span><span>{item.price} €</span>
                </Link>
            </li>
            ))}
            </ul>
        ) : (
            <p>No products to be displayed</p>
        )}
    </>
);

List.propTypes = {
    data: PropTypes.array
};

export default List;