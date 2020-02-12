import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options, onSelected, title }) => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {options.map(opt => <a className="dropdown-item" key={opt.id} on href="#" onClick={onSelected} >{opt.name}</a>)}

            </div>
        </div>
    );
};

Dropdown.propTypes = {

};

export default Dropdown;