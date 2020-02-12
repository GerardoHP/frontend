import React from 'react';

const InputText = props => {
    return (
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Filter..." {...props} />
            <small id="resultsHelp" class="form-text text-muted">{`${props.currentLocations} results`}</small>
        </div>
    );
};

export default InputText;