// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//  
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabs = document.querySelector
('.topics');

//send get request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
    // handle success
    // console.log(response);
    //create variable holding returned data
    const topicsArray = response.data.topics;
    //check to see whats in topics
    // console.log(topics);
    //cycle through each topic and apply it to the "createTabs" function
    topicsArray.forEach(topic => {
        tabs.appendChild(createTabs(topic));
    })
    })
    .catch(error => {
    // handle error
    console.log('error!', error);
    })

    //create a function that makes the tabs
function createTabs(topic) {
    //create elements
    const tabDiv = document.createElement('div');
    const tabTopic = document.createElement('div');
    const tabTitle = document.createElement('span');

    tabTitle.textContent = topic;

    //add classlist
    tabDiv.classList.add('tab');
    tabTopic.classList.add('topics');
    tabTitle.classList.add('title');


    //add everything to .topics div
    tabs.appendChild(tabDiv);
    tabDiv.appendChild(tabTopic);
    tabTopic.appendChild(tabTitle);



    return tabDiv;

}