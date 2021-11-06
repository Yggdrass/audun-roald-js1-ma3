// Module Assignment 3//

//Question 2:

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=58bb5229ecf74ba785d2658b3c7c0171";

const gamesContainer = document.querySelector(".games");



async function getGames() {

    try {
    const response = await fetch(url);
    const results = await response.json();
    const games = results.results;
    
    gamesContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        
        if(i === 8)   {
             break;
        }
            
        gamesContainer.innerHTML += `<div class="game">
                    <h3>Name: ${games[i].name}</h3>
                    <h3>Rating: ${games[i].rating}</h3>
                    <h3>Tags: ${games[i].tags}</h3>
                </div>`;
        
        console.log("NAME: "+games[i].name);
        console.log("RATING: "+games[i].rating);
        console.log("TAGS: "+games[i].tags);
        }
    }
    catch(error){
        console.log("An error has occurred");
        gamesContainer.innerHTML = "<h1>" + "An error has occurred." + "</h1>";
    }
}


getGames();