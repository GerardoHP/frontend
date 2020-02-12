import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadLocations } from '../../redux/actions/locationActions';
import { loadBaths } from '../../redux/actions/bathActions';
import { loadTypes } from '../../redux/actions/typeActions';
import LocationList from './LocationList';

const Locations = ({ locationsFiltered, baths, types, loadLocations, loadBaths, loadTypes }) => {

    useEffect(() => {
        if (locationsFiltered.length === 0) {
            loadLocations().catch(error => alert(`An error ocurred on loading locations: ${error}`));
        }

        if (baths.length === 0) {
            loadBaths().catch(error => alert(`An error ocurred on loading baths: ${error}`));
        }

        if (types.length === 0) {
            loadTypes().catch(error => alert(`An error ocurred on loading types: ${error}`));
        }
    }, [locationsFiltered.length, types.length, baths.length])

    return (
        <LocationList filteredLocations={locationsFiltered} baths={baths} types={types} />
    );
};

Locations.propTypes = {
    locationsFiltered: PropTypes.array.isRequired,
    baths: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    loadLocations: PropTypes.func.isRequired,
    loadBaths: PropTypes.func.isRequired,
    loadTypes: PropTypes.func.isRequired,
};


const mapActionsToProps = (dispatch) => {
    return {
        loadLocations: bindActionCreators(loadLocations, dispatch),
        loadBaths: bindActionCreators(loadBaths, dispatch),
        loadTypes: bindActionCreators(loadTypes, dispatch)
    }
}

const mapStateToProps = ({ locations, baths, types }, { selectedBaths, selectedTypes }) => {
    if (locations === 0 || baths === 0 || types === 0) {
        return {};
    }

    let locationsFiltered = [...locations];
    if (selectedBaths) {
        locationsFiltered = locationsFiltered.filter(location => location.baths === selectedBaths);
    }

    if (selectedTypes) {
        locationsFiltered = locationsFiltered.filter(location => location.types === selectedTypes);
    }

    return { locationsFiltered: locationsFiltered.slice(0, 500), baths, types } //todo: remove slice
}

export default connect(mapStateToProps, mapActionsToProps)(Locations);