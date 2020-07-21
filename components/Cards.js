// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cards = document.querySelector('.cards-container');
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    let info = response.data.articles;
    console.log(response.data.articles);

// You will be creating a component for each 'article' in the list.

//articles in list: javascript, bootstrap, technology, jquery, node
info.bootstrap.forEach((item) => {
    cards.appendChild(cardCreator(item.headline, item.authorPhoto, item.authorName));
});
info.javascript.forEach((item) => {
    cards.appendChild(cardCreator(item.headline, item.authorPhoto, item.authorName));
});
info.jquery.forEach((item) => {
    cards.appendChild(cardCreator(item.headline, item.authorPhoto, item.authorName));
});
info.node.forEach((item) => {
    cards.appendChild(cardCreator(item.headline, item.authorPhoto, item.authorName));
});

info.technology.forEach((item) => {
    cards.appendChild(cardCreator(item.headline, item.authorPhoto, item.authorName));
});




})
.catch(error => {
    console.log('Error!', error);
})

function cardCreator(headline, authorPhoto, authorName) {
    //create elements
    const card = document.createElement('div'),
    cardHeadline = document.createElement('div'),
    cardAuthorDiv = document.createElement('div'),
    cardImgDiv = document.createElement('div'),
    cardImg = document.createElement('img'),
    cardAuthor = document.createElement('span');

        //add classes
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthorDiv.classList.add('author');
    cardImgDiv.classList.add('img-container');

    //append
    card.appendChild(cardHeadline);
    card.appendChild(cardAuthorDiv);
    cardAuthorDiv.appendChild(cardImgDiv);
    cardImgDiv.appendChild(cardImg);
    cardAuthorDiv.appendChild(cardAuthor);

    //content
    cardHeadline.textContent = headline;
    cardImg.src = authorPhoto;
    cardAuthor.textContent = authorName;

    return card;
}