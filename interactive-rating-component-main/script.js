const container = document.querySelector(".container");
const ratings = document.querySelectorAll(".rating-list li");
let selectedRating = 0;

const getRating = (event) => {
    ratings.forEach(rate => {
        rate.classList.remove("active")
    });

    selectedRating = event.currentTarget.innerHTML;
    event.currentTarget.classList.add("active");
    console.log(selectedRating)
}

ratings.forEach((rate) => {
    rate.addEventListener("click", getRating);
});





const submitHandler = () => {
    container.innerHTML = `<div class="thank-you">
        <img src="./images/illustration-thank-you.svg" alt="">
        <p class="selected-rating"> You selected ${selectedRating} out of 5</p>
        <h2>Thank you!</h2>
        <p class="description">We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!</p>
      </div>`
};