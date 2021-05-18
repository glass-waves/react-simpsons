import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ quote }) => {
    return (
        <div>
            <h1>{quote.character}</h1>
            <img src={quote.image} alt={quote.character} />
            <p>{quote.quote}</p>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.shape({
        quote: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        characterDirection: PropTypes.string.isRequired,
    })
}

export default Quote
