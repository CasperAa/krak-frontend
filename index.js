import{renderTemplate, setActive, showPage} from "./utils.js"
import {showHobbies, searchHobbyHandler} from "./js-pages/createHobby.js";
import{getAllPeople} from "./js-pages/seePeoplePage.js"
import{convertAddress} from "./js-pages/address.js"

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id;
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
      //Here you can execute JavaScript for the selected page
      case "page-home": {
        break
      }
      case "page-people": {
        getAllPeople()
        convertAddress()
        break
      }
      case "page-hobby": {
        showHobbies();
        searchHobbyHandler()

        break
      }
    }
  }

  document.getElementById("menu").onclick = renderMenuItems;
showPage("page-home") //Set the default page to render