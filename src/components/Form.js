import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import InputText from './InputText';
import { setSetting } from '../redux/actions/settingsActions';
import { bindActionCreators } from 'redux';

const bathOption = { type: 'bath', title: 'Bath(s)' };
const typeOption = { type: 'type', title: 'Type' };

const Form = ({ baths, types, typeChanged, bathChanged, filterChanged, setSetting, currentLocations }) => {
    const options = [
        { ...bathOption, options: baths },
        { ...typeOption, options: types }
    ];

    const [value, setValue] = useState('');

    const handleSelect = (opt, type) => {
        setSetting({ currentPage: 1 }); //Returning to first page
        switch (type) {
            case (bathOption.type):
                bathChanged(opt);
                break;
            case (typeOption.type):
                typeChanged(opt);
                break;
            default:
                break;
        }
    }

    const handleFilterChange = ({ target: { value } }) => {
        setValue(value);
        filterChanged(value);
        setSetting({ currentPage: 1 });
    }

    return (
        <form>
            <div className="input-group">
                <div className="custom-input">
                    <InputText value={value} onChange={handleFilterChange} currentLocations={currentLocations} />
                </div>
                <div className="input-group-append">
                    {options.map(opt => <Dropdown {...opt} onSelected={handleSelect} key={opt.type} />)}
                </div>
            </div>
        </form>
    );
}

Form.propTypes = {
    baths: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    currentLocations: PropTypes.any.isRequired,
    setSetting: PropTypes.func
};

const MapStateToProps = ({ baths, types, settings: { currentLocations } }, { typeChanged, bathChanged }) => {
    return { baths, types, typeChanged, bathChanged, currentLocations }
}

const MapActionsToProps = (dispatch) => {
    return { setSetting: bindActionCreators(setSetting, dispatch) }
}

export default connect(MapStateToProps, MapActionsToProps)(Form); // Not adding verifying that the baths, types and locations are loaded since Locations and Form is loaded in the same page.