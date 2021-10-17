document.addEventListener('DOMContentLoaded', () => {
    
    const newStarFormSubmit = function(event) {
        event.preventDefault();

        const sportStarList = createSportStar(event);
        const sportStar = document.querySelector("#sports-star-list");
        sportStar.appendChild(sportStarList);

        event.target.reset();

    }

    const newStarForm = document.querySelector("#new-sports-star");
    newStarForm.addEventListener("submit", newStarFormSubmit);

    const deleteAllClick = function(event) {
        const sportsStarList = document.querySelector("#sports-star-list");
        sportsStarList.innerHTML = "";
    }

    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", deleteAllClick)

  })


  const createSportStar = function(event) {

    const name = event.target.name.value;
    const sport = event.target.sport.value;
    const nationality = event.target.nationality.value;

    const newStarList = document.createElement("li");
        
    const nameElement = document.createElement("h1");
    nameElement.textContent = name;
    newStarList.appendChild(nameElement);

    const sportElement = document.createElement("h2");
    sportElement.textContent = sport;
    newStarList.appendChild(sportElement);

    const nationalityElement = document.createElement("h3");
    nationalityElement.textContent = nationality;
    newStarList.appendChild(nationalityElement);

    return newStarList;

}



// 1. once data is entered, grab that data - done
// 2.add that data to an element - done
// 3. creating new element for the list - done
// 4. append data onto new list - done
// 5. clear input form - done
// 6. add to the dom - done
// 7. create delete all - done