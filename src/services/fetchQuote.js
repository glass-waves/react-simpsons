export default fetchQuote = async() => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const quote = await res.json();
    return quote;  
}