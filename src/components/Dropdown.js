import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, onSelected, title, type }) => {

    const [selected, setSelected] = useState();
    const handleSelection = (opt, type) => {
        setSelected(opt);
        onSelected(opt, type);
    }

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {selected && selected.name ? selected.name : title}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {options.map(opt => <button className="dropdown-item" key={opt.id} on="true" onClick={() => handleSelection(opt, type)} >{opt.name}</button>)}
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" on="true" onClick={() => handleSelection({}, type)} >Clear</button>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSelected: PropTypes.func.isRequired,
};

export default Dropdown;