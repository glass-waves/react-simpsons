import React from 'react'
import PropTypes from 'prop-types'

const Load = ({ onPress }) => {
    return (
        <div>
            <button onClick={onPress}>Load Quote</button>
        </div>
    )
}

Load.propTypes = {
    onPress: PropTypes.func.isRequired,
}

export default Load;
