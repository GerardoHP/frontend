import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CardElement extends PureComponent {

    render() {
        const { address, bath, type } = this.props;
        return (
            <div className="col mb-3">
                <div className="card h-100">
                    <div className="card-body">
                        <h5 className="card-title">{address}</h5>
                        <p className="card-text">{type && type.name}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{bath && bath.name}</small>
                    </div>
                </div>
            </div>
        );
    }
}

CardElement.propTypes = {
    address: PropTypes.string.isRequired,
    bath: PropTypes.any,
    type: PropTypes.any,
};

export default CardElement;