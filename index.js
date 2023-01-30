//event listener
document.querySelector('#animal-form').addEventListener('submit', submitFn)

//Event handlers
function submitFn(e){
    e.preventDefault()
    let animalObj = {
        anime_name:e.target.anime_name.value,
        anime_img:e.target.anime_image.value
    }
    returnOneAnimal(animalObj)
    postAnimal(animalObj)
}


// DOM render function
function returnOneAnimal(animal){
    //build animal
    let tempView = document.createElement('li')
    tempView.innerHTML = `
        <div class="">
            <h1>${animal.anime_name}</h1>
        </div>
        <img src="${animal.anime_img}">
    `
    //console.log(tempView);
    //Add animal temView to DOM
    document.querySelector('#animal-list').appendChild(tempView)
}

//Fetch requests
//Fetch all animal respourse (GET)
function fetchAllAnimalData(){
    fetch('http://localhost:3000/aData')
    //use results from the promise
    .then(result => result.json())
    //log translated data from json
    .then(aData => aData.forEach(animal => returnOneAnimal(animal)))
}

//POST
function postAnimal(animalObj){
    //alert(JSON.stringify(animalObj))
    fetch('http://localhost:3000/aData', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(animalObj)

    })
    .then(result => result.json())
    .then(animal => console.log(animal))
}

//initial Render
//Get data and render it to the DOM
function initialFn(){
    fetchAllAnimalData()
    //aData.forEach(animal => oneAnimal(animal));
}
initialFn()

