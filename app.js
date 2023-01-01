//Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:"Nothing is as easy as it looks.",
    person:"Mahata Gandhi"
}, {
    quote:"Everything takes longer than you think.",
    person:"Albert Eisten"
}, {
    quote: "Anything that can go wrong will go wrong.",
    person:"Aristotle"
},{
    quote:"If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong.",
    person:"Steve Jobs"
},{
    quote: "Trust everybody ... then cut the cards.",
    person:"Benjamin Franklin"
},{
    quote:"If at first you don't succeed, destroy all evidence that you tried.",
    person:"Lao Tzu"
},{
    quote:"Exceptions prove the rule ... and wreck the budget.",
    person:"Dalai Lama"
},{
    quote:"Success always occurs in private, and failure in full view.",
    person:"Oprah Winfrey"
},{
    quote:"It is impossible to make anything foolproof because fools are so ingenious.",
    person:"Confucius"
},{
    quote:"Whenever you set out to do something, something else must be done first.",
    person:"Biliqis"
}

]
btn.addEventListener("click",function(){


    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})
