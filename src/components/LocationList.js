import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CardElement from './CardElement';
import Spinner from './Spinner';

class List extends PureComponent {

    flyweights = {};

    get = (bath, type) => {
        const { baths, types } = this.props;

        // console.log(Object.values(this.flyweights).length); // Uncomment to see how muchs space the FlyWeight design pattern it is saving in memory
        if (!this.flyweights[`${bath}-${type}`]) {
            this.flyweights[`${bath}-${type}`] = {
                bath: baths.find(b => b.id === bath),
                type: types.find(t => t.id === type)
            }
        }

        return this.flyweights[`${bath}-${type}`];
    }

    render() {
        const { filteredLocations, baths, types } = this.props;

        return (
            <div className="row row-cols-1 row-cols-md-4">
                {filteredLocations.length > 0 && baths.length > 0 && types.length > 0 ?
                    filteredLocations.map(location => {
                        const { bath, type } = this.get(location.baths, location.types);
                        location = { ...location, bath, type };
                        return (<CardElement key={location.id} {...location} />)
                    }) :
                    <Spinner />}
            </div>
        );
    }
}

List.propTypes = {
    filteredLocations: PropTypes.array.isRequired,
    baths: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired

};

export default List;