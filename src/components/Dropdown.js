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
            <a className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" href="#"  aria-haspopup="true" aria-expanded="false">
                {selected && selected.name ? selected.name : title}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {options.map(opt => <a className="dropdown-item" key={opt.id} on="true" href="#"  onClick={() => handleSelection(opt, type)} >{opt.name}</a>)}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" on="true" href="#" onClick={() => handleSelection({}, type)} >Clear</a>
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