const API = "http://localhost:3000/cars";
let carsList = [];
let addCars = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-car-btn");
  const carFormContainer = document.querySelector(".container");
  const carForm = document.querySelector(".add-cars-form");
  
  

  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      carsList = data;
      renderCars(carsList);
    })
    .catch((error) => {
      console.log("Error fetching car data:", error);
    });

  function renderCars(cars) {
    console.log(cars);
    cars.forEach((car) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const h2 = document.createElement("h2");
      h2.textContent = car.name;

      const img = document.createElement("img");
      img.classList.add("car-img", "test-img");
      img.src = car.imageUrl;

      const p = document.createElement("p");

      const button = document.createElement("button");
      button.classList.add("btn");
      button.setAttribute("id", `${car.id}`);

      
    });
  }

  addBtn.addEventListener("click", () => {
    console.log("clicking button");
    addCars = !addCars;
    if (addCars) {
      carFormContainer.style.display = "block";
    } else {
      carFormContainer.style.display = "none";
    }
  });
  
  carForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Add your desired functionality here
  });

  // Event listener for mouseenter
  const cardContainer = document.querySelector("#card-container");
  cardContainer.addEventListener("mouseenter", () => {
    console.log("mouseenter event on card-container");
    // Add your desired functionality here
  });

});
