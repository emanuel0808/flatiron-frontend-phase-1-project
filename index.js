const API = "http://localhost:3000/cars";
let carsList = [];
let addCars = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#addBtn");
  const carFormContainer = document.querySelector(".container");
  const carForm = document.querySelector(".add-cars-form");
  const cardContainer = document.querySelector("#card-container");

  if (cardContainer) {
    cardContainer.addEventListener("mouseenter", () => {
      console.log("mouseenter event on card-container");
      // Add your desired functionality here
    });
  }

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
    if (cardContainer) {
      cardContainer.innerHTML = ""; // Clear existing cards
      cars.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const h2 = document.createElement("h2");
        h2.textContent = car.make + " " + car.model;

        const img = document.createElement("img");
        img.classList.add("car-img", "test-img");
        img.src = car.imageUrl;

        const pColor = document.createElement("p");
        pColor.textContent = "Color: " + car.color;

        const p = document.createElement("p");
        p.textContent = "description: " + car.description;

        const button = document.createElement("button");
        button.classList.add("btn");
        button.setAttribute("id", `${car.id}`);
        button.textContent = "Price: $" + car.price;

        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(pColor);
        card.appendChild(p);
        card.appendChild(button);
        cardContainer.appendChild(card);
      });
    }
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

    // const searchTerm = carForm.elements["search"].value.toLowerCase();
    // const filteredCars = carsList.filter((car) => {
    //   const name = car.make.toLowerCase() + " " + car.model.toLowerCase();
    //   const color = car.color.toLowerCase();
    //   return name.includes(searchTerm) || color.includes(searchTerm);
    // });

    renderCars(carsList);
  });
});


