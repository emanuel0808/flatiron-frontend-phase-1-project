let addCars = false;

document.addEventListener("DOMContentLoaded", () => {
    const addBtn= document.querySelector("#new-car-btn");
    const carFormContainer = document.querySelector(".container");
    console.log(carFormContainer)

    addBtn.addEventListener("click", (e) => {
            addCar= !addCar;
            if(addCar){
                carFormContainer.style.display = "block";
            }else {
                carFormContainer.style.display = "none";
            }
        });
})