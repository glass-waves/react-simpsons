import React, { useState } from 'react';
import fetchQuote from '../services/fetchQuote';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const onButtonPress = async () => {
        const quote = await fetchQuote();
    };
    return (
        <div>
            <Load onPress={onButtonPress}/>
            {!!quote.length && <Quote quote={quote}/>}
        </div>
    );
};

export default SimpsonsQuote;
