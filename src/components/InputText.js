import React from 'react';

const InputText = props => {
    return (
        <div className="form-group col-md-6">
            <input className="form-control" type="text" placeholder="Filter..." {...props} />
        </div>
    );
};

export default InputText;