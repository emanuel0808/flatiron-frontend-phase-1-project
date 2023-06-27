const API = "http://localhost:3000/cars"
let carsList = [];


let addCars = false;



document.addEventListener("DOMContentLoaded", () => {
    const addBtn= document.querySelector("#new-car-btn");
    const carFormContainer = document.querySelector(".container");

    fetch(API)
  .then((response) => response.json())
  .then((data) => {
    carsList = data; 
    renderCars();

    function renderCars(carsList){
        console.log(carsList);
    }
  })
  .catch((error) => {
    console.log("Error fetching car data:", error);
  });


        
        carsList.forEach((car) => {
            const card = document.createElement("div");
            card.classList.add("card");


          const h2 = document.createElement("h2");
            h2.textContent = car.name
            


          const img = document.createElement("img");
            img.classList.add("car-img", "test-img");
            img.src = car.imageUrl;

            

          const p = document.createElement("p");


          const button = document.createElement("button");
          button.classList.add("btn");
          button.setAttribute("type", "button");

          card.append(h2, img, p);
          console.log(button)

          

           



        })



      



    




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
