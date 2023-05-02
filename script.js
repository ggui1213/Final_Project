AOS.init();

let pageTitleElement;
let projectDisplayElement;

let data = [
{
    "itemTitle" : "Myself 1",
    "id" : "1",
    "description" : "There is no meaning now.",
    "image" : "img/2-1.png"
},{
	"itemTitle" : "Myself 2",
    "id" : "2",
    "description" : "Do you understand my pain?",
    "image" : "img/2-2.png"
},{
	"itemTitle" : "Myself 3",
    "id" : "3",
    "description" : "I found all of this would eventually gone to ashes.",
    "image" : "img/2-3.png"
},{
	"itemTitle" : "Myself 4",
    "id" : "4",
    "description" : "But I just can't controll myself",
    "image" : "img/2-4.png"
},{
	"itemTitle" : "Myself 5",
    "id" : "5",
    "description" : "To these eteral mess of meaninglessness... And there is no escape",
    "image" : "img/2-5.png"
}];


document.addEventListener("DOMContentLoaded", function(){
	pageTitleElement = document.getElementById("pageTitle");
	projectDisplayElement = document.getElementById("projectDisplay");

	let queryString = window.location.search;
	let urlParams = new URLSearchParams(queryString);
	let urlSection = urlParams.get('section');
	let urlID = urlParams.get('id');

	if (urlSection == "item"){
		for (let i = 0; i < data.length; i++) {
			if (data[i]["id"] == urlID) {
				createProjectPage(data[i]);
      			}
    		}
		}
	});


function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["itemTitle"];

  let newProjectElement = document.createElement("DIV");
  newProjectElement.setAttribute("data-aos", "fade-up");

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("projectHeroImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  projectDisplayElement.appendChild(newProjectElement);

}
