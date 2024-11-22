// Quotes of the day

var quoteOfTheDay ;
var textsQuotes ;
var authorsQuotes;

function getQuotes()
{
    // the Quotes
     textsQuotes = [
        "“Be yourself; everyone else is already taken.”" ,
        "“So many books, so little time.”",
        "“A room without books is like a body without a soul.”",
        "“You only live once, but if you do it right, once is enough.”",
        "“Be the change that you wish to see in the world.”",
        "“Love what you do until what you love”"
    ];

    // the Autors
     authorsQuotes = ["― Oscar Wilde", "― Frank Zappa", "― Marcus Tullius Cicero", "― Mae West", "― Mahatma Gandhi" , "― Mohamed Saleh"];


    quoteOfTheDay = Math.floor(Math.random() * textsQuotes.length);

    // print quotes
     document.getElementById("quotes").innerHTML = textsQuotes[quoteOfTheDay] ;

     // print authors
     document.getElementById("authors").innerHTML = authorsQuotes[quoteOfTheDay];
}

