/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/
// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://uboraacademy.slack.com


/*** 
 * Quotes Array
 * 
 * An array of quote objects including quote, source, citation, and year.
 ***/

 const quotes = [{
	quote: 'Help me Obi-Wan Kenobi. Youre my only hope.',
	source: 'Leia Organa',
  citation: 'Star Wars - A New Hope',
  year: 1977
}, {
	quote: 'Why, you stuck-up, half-witted, scruffy-looking nerf herder!',
	source: 'Leia Organa',
  citation: 'Star Wars - The Empire Strikes Back',
  year: 1980
}, {
	quote: 'Your focus determines your reality.',
	source: 'Qui-Gon Jinn',
  citation: 'Star Wars - The Phantom Menace',
  year: 1999
}, {
	quote: 'Do. Or do not. There is no try.',
	source: 'Yoda',
  citation: 'Star Wars - The Empire Strikes Back',
  year: 1980
}, {
	quote: 'So this is how liberty dies…with thunderous applause.',
	source: 'Padmé Amidala',
  citation: 'Star Wars - Revenge of the Sith',
  year: 2005
}, {
	quote: 'Remember...the Force will be with you, always.',
	source: 'Obi-Wan Kenobi',
  citation: 'Star Wars - A New Hope',
  year: 1977
}, {
	quote: 'Laugh it up, fuzzball',
	source: 'Han Solo',
  citation: 'Star Wars - The Empire Strikes Back',
  year: 1980
}, {
	quote: 'The Force is not a power you have. It’s not about lifting rocks. It’s the energy between all things, a tension, a balance, that binds the universe together.',
	source: 'Luke Skywalker',
  citation: 'Star Wars - The Last Jedi',
  year: 2017
}, {
	quote: 'Id just as soon kiss a Wookiee',
	source: 'Leia Organa',
  citation: 'Star Wars - The Empire Strikes Back',
  year: 1980
}, {
	quote: 'It’s the ship that made the Kessel run in less than twelve parsecs.',
	source: 'Han Solo',
  citation: 'Star Wars - A New Hope',
  year: 1977
}, {
  quote: 'I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.',
	source: 'Luke Skywalker',
}, {
	quote: 'You can’t stop the change, any more than you can stop the suns from setting.',
	source: 'Shmi Skywalker',
  citation: 'Star Wars - The Phantom Menace',
}];

/***
 * Uncomment console.table below to see quotes display in a table via Dev Tools Console
***/
//console.table(quotes);

/***
 * getRandomQuote Function
 * 
 * Returns a random quote from the quotes array using index values.
 ***/

function getRandomQuote() {
	let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
	return randomQuote;
}

/***
 * Uncomment console.log below to test getRandomQuote functionality. A random comment should display upon page refresh.
***/
//console.log(getRandomQuote(quotes));


/***
 * printQuote Function
 * 
 * Prints the quote and source of the quote passed in.
 * 
 ***/

function printQuote () {

  const pullQuote = getRandomQuote(quotes);
  quote = `<p class="quote">${pullQuote.quote}</p>
          <p class="source">${pullQuote.source}</p>`;

  if (pullQuote.citation ) {
    quote = `<p class="quote">${pullQuote.quote}</p>
    <p class="source">${pullQuote.source}
    <span class="citation">${pullQuote.citation}</span>
    </p>`
  }

  if (pullQuote.year) {
    quote = `<p class="quote">${pullQuote.quote}</p>
    <p class="source">${pullQuote.source}
    <span class="citation">${pullQuote.citation}</span>
    <span class="year">${pullQuote.year}</span>
    </p>`
  }
  
  document.getElementById('quote-box').innerHTML = quote;
} 
//Declare quote variable and set it to the quote and source paragraph tags.


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false); 