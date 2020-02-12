import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadLocations } from '../redux/actions/locationActions';
import { loadBaths } from '../redux/actions/bathActions';
import { loadTypes } from '../redux/actions/typeActions';
import { loadSettings, setSetting } from '../redux/actions/settingsActions';
import LocationList from './LocationList';

const Locations = ({ locationsFiltered, baths, types, settings, loadLocations, loadBaths, loadTypes, loadSettings, setSetting }) => {

    useEffect(() => {
        if (locationsFiltered.length === 0) {
            loadLocations().catch(error => alert(`An error ocurred on loading locations: ${error}`));
        } else {
            setSetting({ currentLocations: locationsFiltered.length })
        }

        if (baths.length === 0) {
            loadBaths().catch(error => alert(`An error ocurred on loading baths: ${error}`));
        }

        if (types.length === 0) {
            loadTypes().catch(error => alert(`An error ocurred on loading types: ${error}`));
        }

        if (settings) {
            loadSettings();
        }

    }, [locationsFiltered.length, types.length, baths.length])

    return (
        <LocationList filteredLocations={locationsFiltered.slice((settings.currentPage - 1) * settings.pagination, (settings.currentPage * settings.pagination) - 1)} baths={baths} types={types} />
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
        loadTypes: bindActionCreators(loadTypes, dispatch),
        loadSettings: bindActionCreators(loadSettings, dispatch),
        setSetting: bindActionCreators(setSetting, dispatch),
    }
}

const mapStateToProps = ({ locations, baths, types, settings }, { selectedBaths, selectedType, filter }) => {

    if (locations === 0 || baths === 0 || types === 0) {
        return {};
    }

    let locationsFiltered = [...locations];
    if (selectedBaths.id) {
        locationsFiltered = locationsFiltered.filter(location => location.baths === selectedBaths.id);
    }

    if (selectedType.id) {
        locationsFiltered = locationsFiltered.filter(location => location.types === selectedType.id);
    }

    if (filter) {
        locationsFiltered = locationsFiltered.filter(location => location.address.includes(filter));
    }

    return { locationsFiltered: locationsFiltered, baths, types, settings } 
}

export default connect(mapStateToProps, mapActionsToProps)(Locations);