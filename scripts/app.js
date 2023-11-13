document.addEventListener("DOMContentLoaded",()=>{
    const categorySelect = document.getElementById("category-select");
    const breedSelect = document.getElementById("breed-select");
    categorySelect.addEventListener("change",filterPets);
    breedSelect.addEventListener("change",filterPets)

    displayPets(pets);
})

function filterPets(){
    const category = document.getElementById("category-select").value;
    const breed = document.getElementById("breed-select").value;
    let filteredPets=pets;
    if(category!="Show All"){
        filteredPets=filteredPets.filter(p=>p.type==category)
    }
    
    if(  breed!="Show All"){
        filteredPets=filteredPets.filter(p=>p.breed==breed)
    }

    displayPets(filteredPets)
}
function displayPets(pets){
    const petsContainer = document.querySelector("#content")
    // clear all elements
    petsContainer.innerHTML = "";

    pets.forEach(pet => {

        displayPet(pet, petsContainer)
        
    });

}
function displayPet(pet,parentDiv){
     // create a div for each pet
     const petDiv = document.createElement("div");
     petDiv.classList.add("card");
     petDiv.classList.add("m-1");
     petDiv.classList.add("p-2");
    petDiv.classList.add("pet") ;
     petDiv.id = "pet-" + pet.name ;
     // add pett to the container
     parentDiv.appendChild(petDiv);
     addPetImage(pet,petDiv)
     addPetName(pet,petDiv);
     addPetType(pet,petDiv);
     addPetBreed(pet,petDiv);
     addBestTrick(pet,petDiv)
     addCartButton(pet,petDiv)

} 
function addPetName(pet, petDiv) {
    

    // create the pet info div 
    const petInfoDiv = document.createElement("div");
    petDiv.appendChild(petInfoDiv);

    // add pet header
    const petHeader = document.createElement("h4")
    petHeader.innerText = pet.name;
    petInfoDiv.appendChild(petHeader);
}

function addPetType(pet,petDiv){
const petType=document.createElement("h6");
petType.innerText=pet.type;
petDiv.appendChild(petType);



}
function addPetBreed(pet,petDiv){
    const petBreed=document.createElement("h6");
    petBreed.innerText=pet.breed;
    petDiv.appendChild(petBreed);

}
function addPetImage(pet, petDiv) {
    // create the image div (image and price)
    const imageRow = document.createElement("div");
    imageRow.classList.add("photo")
    petDiv.appendChild(imageRow)

    // add pet image
    const img = document.createElement("img");
    img.classList.add("card-img-top")
    img.src = "../" +pet.image 
    imageRow.appendChild(img)

    
}
function addBestTrick(pet,petDiv){
    const trick=document.createElement("p");
    trick.innerText=pet.bestTrick;
    petDiv.appendChild(trick)
}

function addCartButton(pet, parent) {

    // add cart button div
    const cartButtonDiv = document.createElement("div");
    cartButtonDiv.classList.add("add-button")
    parent.appendChild(cartButtonDiv);
    // add button
    const cartButton = document.createElement("button");
    cartButton.classList.add("btn");
    cartButton.classList.add("btn-success");
    cartButton.innerText = "Add";
    cartButtonDiv.appendChild(cartButton)
}