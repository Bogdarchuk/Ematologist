const OpenButton = document.querySelector(".service_wrapper_btn");
const model = document.querySelector(".model");
const CloseButton = document.querySelector(".model_close_btn");

function OpenModel() {
    model.style.display = "block"
}
OpenButton.addEventListener("click", OpenModel)

function CloseModel() {
    
    model.style.display = "none";
}
CloseButton.addEventListener("click", CloseModel )

