const API = "http://localhost:3000/cars"


let addCars = false;

document.addEventListener("DOMContentLoaded", () => {
    const addBtn= document.querySelector("#new-car-btn");
    const carFormContainer = document.querySelector(".container");

    fetch(API)
      .then((response) => response.json())
      .then(renderCars)

      function renderCars(cars) {
        console.log(cars);



        CarsList.forEach((cars) => {
            const card = document.createElement("div");
            card.classList("card")

            const img = document.createElement("img");
            img.classList("card-img-top");
            img.src = cars.imageUrl;
        })



      }



    




    document.addEventListener("click", () => {
        console.log("clicking button")

            addCars = !addCars;
            if(addCars){
                carFormContainer.style.display = "block";
            }else {
                carFormContainer.style.display = "none";
            }
        });
})
