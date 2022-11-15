const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const nextQuoteBtn = document.getElementById('new-quote');
const tweetQuoteBtn = document.getElementById('tweet-quote');
const loader = document.getElementById("loader")

let apiQuotes = []; //Math.floor(Math.random)

function showLoader(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function stopLoader(){
    //core css 
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function getNewQuote(){
    showLoader();//TODO:check if it is required or not
    const newQuoteObject = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quoteText.textContent = newQuoteObject.text;
    authorText.textContent = newQuoteObject.author;
    //some mathematical operation and displaying the new quote
    stopLoader();
}

async function getQuotes(){
    showLoader();
    const apiUrl = "https://type.fit/api/quotes";
    
    try{
        let dataJSON = await fetch(apiUrl) 
        let data = await dataJSON.json()
        apiQuotes = data;//a
        console.log(apiQuotes[0])
        getNewQuote()
    }
    catch(err){
        console.log(err)
    }

    // .then((data) =>{
    //     return data.json()
    // })
    // .then((data) =>{
    //     apiQuotes = data;//arrays of objects -?

    //     console.log('Api loading is done')
    //     console.log(apiQuotes[0])
    //     getNewQuote();
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
}

getQuotes();

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}`
    window.open(twitterUrl, "_blank")
}


nextQuoteBtn.addEventListener('click', getNewQuote)
tweetQuoteBtn.addEventListener('click', tweetQuote)