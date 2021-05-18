import React, { useState } from 'react';
import {fetchQuote} from '../services/fetchQuote';
import Load from '../components/quote/Load'
import Quote from '../components/quote/Quote'

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const onButtonPress = async () => {
        const quote = await fetchQuote();
        setQuote(quote)
    };
    return (
        <div>
            <Load onPress={onButtonPress}/>
            {!!quote.length && <Quote quote={quote[0]}/>}
        </div>
    );
};

export default SimpsonsQuote;
