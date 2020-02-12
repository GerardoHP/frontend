import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSetting } from '../redux/actions/settingsActions';

const Paginator = ({ pagination, currentLocations, currentPage, setSetting }) => {

    const selectionChange = (number) => {
        setSetting({ currentPage: number });
    }

    const pages = Math.ceil(currentLocations / pagination);
    console.log(pages);

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" tabIndex="-1" aria-disabled={currentPage === 1} onClick={() => selectionChange(currentPage - 1)}>Previous</button>
                </li>
                {Array.from(Array(pages), (e, number) => {
                    return <li key={number} className="page-item">
                        <button className="page-link" onClick={() => selectionChange(number + 1)} href="#">
                            {number + 1}
                            {(number + 1) === currentPage ? <span className="sr-only">(current)</span> : ''}
                        </button>
                    </li>
                })}
                <li className={`page-item ${currentPage === pages ? 'disabled' : ''}`}>
                    <button className="page-link" aria-disabled={currentPage === pages} onClick={() => selectionChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
};

Paginator.propTypes = {
    pagination: PropTypes.number.isRequired,
    currentLocations: PropTypes.number.isRequired,
    setSetting: PropTypes.func.isRequired
};

const MapStateToProps = ({ settings }, ownProps) => {
    return { ...settings, ...ownProps }
}

const MapActionsToProps = (dispatch) => {
    return { setSetting: bindActionCreators(setSetting, dispatch) }
}

export default connect(MapStateToProps, MapActionsToProps)(Paginator);